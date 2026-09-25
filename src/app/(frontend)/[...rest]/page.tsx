import { notFound } from 'next/navigation'

/*
 * El lloc té dos layouts arrel (el públic i el de Payload) i Next no en pot
 * triar cap per a una adreça que no existeix: sense aquesta ruta, el 404 sortia
 * en anglès i sense capçalera. Qualsevol ruta concreta té prioritat sobre
 * aquesta, que només recull el que no coincideix amb res.
 */
export default function UnmatchedRoute(): never {
  notFound()
}
