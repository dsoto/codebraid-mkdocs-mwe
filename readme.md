# Codebraid and MkDocs

This is a small repo to demonstrate integration of Codebraid and MkDocs to programmatically generate content for a static website.

## Makefile

This approach separates the concerns between pandoc for HTML and MkDocs for the static website.
The source documents are in the `raw_docs` folder.
The makefile uses pandoc to convert each of these markdown source files into an HTML file with a `.md` extension in the `docs` directory.
Then MkDocs creates a static website.

## Packages

This repo requires the following packages

- [codebraid](https://github.com/gpoore/codebraid)
- [mkdocs](https://github.com/mkdocs/mkdocs)
- [pandoc](https://pandoc.org/)
- [schemdraw](https://schemdraw.readthedocs.io/)
- [graphviz](https://pypi.org/project/graphviz/)
- [sympy](https://www.sympy.org/)
- [matplotlib](https://matplotlib.org/)
