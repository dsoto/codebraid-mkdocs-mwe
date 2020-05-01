all: docs/index.md \
     docs/katex.md \
	 docs/matplotlib.md \
	 docs/schemdraw.md \
	 docs/graphviz.md \
	 docs2site

docs/%.md: raw_docs/%.md
	codebraid pandoc $< -o $@ --to html --katex --overwrite

docs2site:
	mkdocs build --no-directory-urls
