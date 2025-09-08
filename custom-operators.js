import ScratchBlocks from 'scratch-blocks';

// Resolve the active Blockly namespace used by the injected workspace.
// In some builds, the global is window.Blockly; in others, the import exposes it.
// Prefer the import, fall back to window.Blockly.
// eslint-disable-next-line no-undef
const GlobalBlockly = (typeof window !== 'undefined' && window.Blockly) ? window.Blockly : null;
const BlocklyNS = ScratchBlocks || GlobalBlockly;
const BlocksRegistry = (BlocklyNS && BlocklyNS.Blocks) || (GlobalBlockly && GlobalBlockly.Blocks);

// Ensure custom operator blocks are registered so the toolbox XML inputs exist.
// These mirror the expected shape used in make-toolbox-xml (input_value name: NUM).

if (BlocksRegistry && !BlocksRegistry['operator_square']) {
    BlocksRegistry['operator_square'] = {
        init: function () {
            this.jsonInit({
                message0: BlocklyNS.ScratchMsgs.translate('OPERATORS_SQUARE', 'square %1'),
                args0: [
                    { type: 'input_value', name: 'NUM' }
                ],
                category: BlocklyNS.Categories.operators,
                extensions: ['colours_operators', 'output_number']
            });
        }
    };
}

if (BlocksRegistry && !BlocksRegistry['operator_sqrt']) {
    BlocksRegistry['operator_sqrt'] = {
        init: function () {
            this.jsonInit({
                message0: BlocklyNS.ScratchMsgs.translate('OPERATORS_SQRT', 'square root %1'),
                args0: [
                    { type: 'input_value', name: 'NUM' }
                ],
                category: BlocklyNS.Categories.operators,
                extensions: ['colours_operators', 'output_number']
            });
        }
    };
}


