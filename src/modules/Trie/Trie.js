class Trie {
  constructor() {
    this.root = {};
  }

  insert(word, idx) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
      if (!("indexes" in node)) node.indexes = new Set();
      node.indexes.add(idx);
    }

    node.isWord = true;
  }

  delete(word, idx) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if ("indexes" in node) {
        // @ts-ignore
        node.indexes.delete(idx);
      }
    }
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  startsWith(prefix) {
    let node = this.traverse(prefix);
    if (node != null && node.isWord === true) {
      for (let idx of node.indexes) {
        this.delete(prefix, idx);
      }
      return prefix;
    } else if (node != null) {
      return node.indexes;
    }
  }
}

export default Trie;
