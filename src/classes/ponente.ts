export class Ponente {
    nombre: string
    descripcion: string
    imagen: string
    slug: string

    constructor(nombre: string, descripcion: string, imagen: string, slug: string) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.imagen = imagen
        this.slug = slug
    }
}