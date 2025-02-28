/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/PlaneLowPoly.gltf 
Author: Mauro3D (https://sketchfab.com/maurogsw)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-boeing-787-dreamliner-50baa323fabd49a6b861096cb88e5c25
Title: Low Poly Boeing 787 Dreamliner
*/

import { useEffect } from "react"
import { useGLTF } from "@react-three/drei"

type GLTFResult = any & {
  nodes: any
  materials: any
}

export default function PlaneLowPoly({ onLoad, ...props }: any) {
  const gltf = useGLTF<GLTFResult>("/PlaneLowPoly.gltf")
  const { nodes, materials } = gltf as any;

  // Call onLoad when the model is ready
  useEffect(() => {
    if (nodes && materials && onLoad) {
      onLoad()
    }
  }, [nodes, materials, onLoad])

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.016}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 421.263, 0]}>
            <group rotation={[0.01, 0, 0]}>
              <mesh
                geometry={nodes.FRONT_LG_Material002_0.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.FRONT_LG_Material001_0.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group
              position={[508.444, -24.033, -541.772]}
              rotation={[0.01, 0, 0]}
            >
              <mesh
                geometry={nodes.REAR_LEFT_LG_Material001_0.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                geometry={nodes.REAR_LEFT_LG_Material002_0.geometry}
                material={materials["Material.002"]}
              />
            </group>
            <group
              position={[-508.444, -24.033, -541.772]}
              rotation={[0.01, 0, 0]}
            >
              <mesh
                geometry={nodes.REAR_RIGHT_LG_Material001_0.geometry}
                material={materials["Material.001"]}
              />
              <mesh
                geometry={nodes.REAR_RIGHT_LG_Material002_0.geometry}
                material={materials["Material.002"]}
              />
            </group>
            <mesh
              geometry={nodes.Body_Wings_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              geometry={nodes.Body_Wings_Material003_0.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              geometry={nodes.Rear_Rudder__0.geometry}
              material={materials.Rear_Rudder__0}
              position={[0, -5.892, -0.059]}
              rotation={[0.01, 0, 0]}
            />
            <mesh
              geometry={nodes.Rear_Stabilizer__0.geometry}
              material={materials.Rear_Rudder__0}
              position={[0, -5.892, -0.059]}
              rotation={[0.01, 0, 0]}
            />
            <mesh
              geometry={nodes.Elevators__0.geometry}
              material={materials.Rear_Rudder__0}
              rotation={[0.01, 0, 0]}
            />
            <mesh
              geometry={nodes.Horizontal_Stabilizer__0.geometry}
              material={materials.Rear_Rudder__0}
              rotation={[0.01, 0, 0]}
            />
            <mesh
              geometry={nodes.Fueselage__0.geometry}
              material={materials.Rear_Rudder__0}
              rotation={[0.01, 0, 0]}
            />
            <mesh
              geometry={nodes.Engines_Material001_0.geometry}
              material={materials["Material.001"]}
              rotation={[0.01, 0, 0]}
            />
            <mesh
              geometry={nodes.Flap_Connectors__0.geometry}
              material={materials.Rear_Rudder__0}
              rotation={[0.01, 0, 0]}
            />
            <mesh
              geometry={nodes.Windows_Material002_0.geometry}
              material={materials["Material.002"]}
              rotation={[0.01, 1.571, 0]}
            />
            <mesh
              geometry={nodes.Ellerons_Material003_0.geometry}
              material={materials["Material.003"]}
              rotation={[0.01, 0, 0]}
            />
            <mesh
              geometry={nodes.Flaps_Material003_0.geometry}
              material={materials["Material.003"]}
              position={[0, 0.197, -19.641]}
              rotation={[0.01, 0, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/PlaneLowPoly.gltf")
