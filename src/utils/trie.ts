import { TrieNode } from '../types';

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = this.createNode();
  }

  private createNode(): TrieNode {
    return {
      children: {},
      isEndOfWord: false,
    };
  }

  insert(word: string): void {
    let current = this.root;
    const lowerWord = word.toLowerCase();

    for (const char of lowerWord) {
      if (!current.children[char]) {
        current.children[char] = this.createNode();
      }
      current = current.children[char];
    }

    current.isEndOfWord = true;
    current.value = word;
  }

  search(prefix: string): string[] {
    const result: string[] = [];
    let current = this.root;
    const lowerPrefix = prefix.toLowerCase();

    // Navigate to the last node of the prefix
    for (const char of lowerPrefix) {
      if (!current.children[char]) {
        return result;
      }
      current = current.children[char];
    }

    // Collect all words with the given prefix
    this.collectWords(current, result);
    return result;
  }

  private collectWords(node: TrieNode, result: string[]): void {
    if (node.isEndOfWord && node.value) {
      result.push(node.value);
    }

    for (const char in node.children) {
      this.collectWords(node.children[char], result);
    }
  }
}