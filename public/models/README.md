# /public/models

Place all 3D model files here.

- `bottle.glb` — AURAH 500ml bottle (main 3D model)
- `bottle-label.glb` — bottle with label texture (optional)

## Usage in code
```js
import { useGLTF } from '@react-three/drei'
const { scene } = useGLTF('/models/bottle.glb')
```

## Tips
- Keep GLB files under 5MB for fast load
- Use https://gltf.report to compress/optimize
- Use https://github.com/pmndrs/gltfjsx to auto-generate React components from GLB
