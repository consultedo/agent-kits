## Reverse engineering (REA)
- Put files to analyze in `targets/` (gitignored: never commit or push target binaries).
  Only analyze software the user has said they are authorized to analyze.
- STATIC ANALYSIS ONLY. Never execute, launch, load, debug or instrument a target or anything
  extracted from it: not directly, not via Wine, emulators, containers or scripts, and not via
  REA tools. REA's runtime, debugger, Frida, ADB, browser and Rizin/Cutter tools are denied in
  this project. If a task seems to need them, stop and ask the user.
- Do not run `rea setup`, `rea update`, `rea uninstall` or `npx rea-agents ...`, and do not
  change the REA, Ghidra or Java installation. Report provider problems to the user instead.
- Ghidra is memory-heavy: analyze one target at a time and close it (`close_binary`) when done.
- The REA skill also describes runtime workflows. In this project the rules above take precedence.
- Write findings and specifications into the repo (for example `docs/`), citing addresses and
  evidence rather than pasting large decompiled dumps.
