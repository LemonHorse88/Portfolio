function splitAndSortWords(sentence) {
    const words = sentence.split(' ');
    const sortedWords = words.sort();

    return sortedWords.join(' ');
}

function splitAndSortSentences(text) {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim());
    const sortedSentences = sentences.sort();
    return sortedSentences.map(s => s.trim() + '.').join(' ');
}