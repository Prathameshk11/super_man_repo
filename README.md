# Scratch Custom Operator Blocks  

This repository contains my implementation for **Task 2** of the STEMpedia assessment: adding **Square** and **Square Root** operator blocks to Scratch.  

## Features  
- **Square Block (`square of [num]`)** → Returns the square of the given number.  
- **Square Root Block (`sqrt of [num]`)** → Returns the square root of the given number (returns `NaN` for negative inputs).  
- Fully integrated into the **Operators** category in the Scratch toolbox.  
- Works inside Scratch projects, allowing the cat (or any sprite) to **say the result** of square/square-root calculations.  

## Files Modified / Added  

### **scratch-blocks**  
- `scratch-blocks/blocks_vertical/operators.js`  
  - Added block definitions for **Square** and **Square Root**.  

### **scratch-vm**  
- `scratch-vm/src/blocks/scratch3_operators.js`  
  - Implemented logic for:  
    - `operator_square`  
    - `operator_sqrt`  

### **scratch-gui**  
- `scratch-gui/src/lib/make-toolbox-xml.js` → Added blocks to Operators toolbox XML.  
- `scratch-gui/src/lib/custom-operators.js` (new file) → Registers custom blocks at runtime.  
- `scratch-gui/src/playground/render-gui.jsx` → Ensures custom operators are registered on load.  
- `scratch-gui/package.json` → Pinned React, React-DOM, and React-Intl versions for stability.  

---

## ▶️ Demo Usage  
Example Scratch script to test the new blocks:  

1. Drag the **Square** and **Square Root** blocks from the **Operators** category.  
2. Combine them with the `say` block, e.g.:  
   - `say (square of (5.5))` → Cat says **30.25**  
   - `say (sqrt of (5.5))` → Cat says **2.345...**  
   - `say (sqrt of (-5.5))` → Cat says **NaN**  

---

