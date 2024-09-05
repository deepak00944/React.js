## Fiber, VirtualDOM and reconciliation 

https://github.com/acdlite/react-fiber-architecture

# createRoot()

- Behind the scene it create DOM like structure same as our browser has and it compare the both dom and make ther changes which are changed in UI only and browser reload whole page( pura tree firse banta h)

## Reconciliation
- algorithm which differentiate one tree with another to detrmine which parts to be changed. 
- this waht we call the virtual dom.

- why we should use keys in arrays, list, .....
    - fiber jo new algorithm likhi thi usme list ki performance ko shi karne ke liye keys ka use hota h.

## fiber
- heart of react fiber's architecture 