# Schemdraw

```{.python .cb.run}
# this allows generated files to be saved to the correct spot
import os
os.chdir('docs')
```

```{.python .cb.nb}
import SchemDraw
import SchemDraw.elements as elm
d = SchemDraw.Drawing()
V1 = d.add(elm.SOURCE_V, label='$1V$')
R1 = d.add(elm.RES, d='right', label='1$\Omega$')
R2 = d.add(elm.RES, d='down', label='1$\Omega$')
L1 = d.add(elm.LINE, d='left')
d.draw(showplot=False)
filename = 'figures/circuit.svg'
d.save(filename)
markdown = '![](' + filename + ')'
```

`markdown`{.python .cb.expr}
