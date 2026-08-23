"use client";

import { useEffect, useRef, useState } from "react";

type ProgramLink = {
  number: string;
  title: string;
  link: string;
};

type MenuDropdownProps = {
  programs: ProgramLink[];
  bookingUrl: string;
};

export default function MenuDropdown({
  programs,
  bookingUrl,
}: MenuDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeWithEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="nav-menu" ref={containerRef}>
      <button
        ref={buttonRef}
        className="nav-menu__trigger"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span>Menu</span>
        <span className="nav-menu__icon" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      {open ? (
        <div className="nav-menu__panel" id="site-navigation-menu">
          <p className="nav-menu__label">Programs</p>
          <nav className="nav-menu__programs" aria-label="Program pages">
            {programs.map((program) => (
              <a href={program.link} key={program.title} onClick={closeMenu}>
                <span>{program.number}</span>
                <strong>{program.title}</strong>
                <b aria-hidden="true">→</b>
              </a>
            ))}
          </nav>

          <div className="nav-menu__actions">
            <a href="#reviews" onClick={closeMenu}>
              Reviews
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <a
            className="nav-menu__booking"
            href={bookingUrl}
            onClick={closeMenu}
          >
            Schedule a Free 15-Minute Call
          </a>
        </div>
      ) : null}
    </div>
  );
}
