export function handleKeyboardTyping(key, text, onBackspaceKeyed, onUserTagging, onSubfomoTagging, onRegularTyping) {
    if (key === 'Backspace') {
        onBackspaceKeyed();
    } else if (key === "@" &&
        (text.length === 0 || // iOS has inputText delay
            text.endsWith(" ") ||
            text.endsWith("@"))) {
        onUserTagging()
    } else if (onSubfomoTagging && key === "/" &&
        (text.endsWith("f") || // iOS has inputText delay
            text.endsWith("f/"))) {
        onSubfomoTagging();
    } else {
        if (onRegularTyping) onRegularTyping();
    }
}