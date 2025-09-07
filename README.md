# Scratch Custom Operator Blocks

This repository contains my implementation attempt for **Task 2** of the STEMpedia assessment: adding **Square** and **Square Root** operator blocks to Scratch.

## Files Included
- `scratch-blocks/blocks_vertical/operators.js` → Block definitions for Square and Square Root.
- `scratch-vm/src/blocks/scratch3_operators.js` → Implementation of Square and Square Root functions.

## Notes
- The blocks currently appear **red in the GUI**, indicating registration errors. This demonstrates my attempt, but the logic for the operators is complete and ready for testing.
- To test locally:
  1. Clone the official Scratch repos (`scratch-gui`, `scratch-vm`, `scratch-blocks`).
  2. Replace the respective files with the ones from this repo.
  3. Build `scratch-blocks` and run `scratch-gui`.

## Functionality
- **Square block** → Returns the square of a given number.
- **Square Root block** → Returns the square root of a given number (supports positive and negative numbers).
