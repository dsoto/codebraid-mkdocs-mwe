# Graphviz

```{.python .cb.nb}
# this allows generated files to be saved to the correct spot
import os
os.chdir('docs')
```

```{.python .cb.nb}
from graphviz import Digraph
g = Digraph()
g.edge('A', 'B')
g.filename = 'figures/graphviz.tmp'
g.format = 'svg'
g.render()
markdown = '![](figures/graphviz.tmp.svg)'
```

`markdown`{.python .cb.expr}
