## KaTeX

We use pandoc to convert `$$` delimited math to math html spans.
We then use the MkDocs yml file to load the KaTeX libraries and scripts to render.

## Inline math

`$x^y$` renders to: $x^y$

## Display Math

`$$\sum_i x_i$$` renders to:

$$\sum_i x_i$$

## Sympy

We output a latex representation and then create a `$$` delimited math string.
Using `.cb.expr` this is placed into the markdown.
This allows KaTeX to render the math after pandoc converts to a math html span.

```{.python .cb.nb}
from sympy import *
x = Symbol('x')
eqn = E**(-x**2)
int_eqn = Integral(eqn, (x, -oo, oo))
markdown = '$$' + latex(int_eqn) + '$$'
print(markdown)
```

The string above renders to:

`markdown`{.python .cb.expr}