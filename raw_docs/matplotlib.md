# Matplotlib

We create the figures in the docs directory so that MkDocs copies them to the site directory.

```{.python .cb.nb}
# this allows generated files to be saved to the correct spot
import os
os.chdir('docs')
```

## Figures

```{.python .cb.nb}
import matplotlib.pyplot as plt
plt.plot([0, 1])
filename = 'figures/test-1.png'
plt.savefig(filename)
markdown = '![](' + filename + ')'
```

`markdown`{.python .cb.expr}