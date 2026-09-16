import { Injectable, NotFoundException } from '@nestjs/common';

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

/**
 * Servicio encargado de gestionar la lógica de negocio para los productos.
 * Contiene operaciones para listar y buscar productos específicos.
 */
@Injectable()
export class ProductosService {
    private readonly productos: Producto[] = [
        { id: 1, nombre: 'Teclado mecanico', precio: 45.90 },
        { id: 2, nombre: 'Mouse inalambrico', precio: 19.50 },
        { id: 3, nombre: 'Monitor 24 pulgadas', precio: 129.99 },
    ];

    /**
     * Retorna todos los productos disponibles en el catálogo.
     * @returns {Producto[]} Un arreglo de productos.
     */
    findAll(): Producto[] {
        return this.productos;
    }

    /**
     * Busca un producto por su identificador único.
     * @param {number} id - El identificador del producto a buscar.
     * @returns {Producto} El producto encontrado.
     * @throws {NotFoundException} Si no se encuentra un producto con el id proporcionado.
     */
    findOne(id: number): Producto {
        const producto = this.productos.find((p) => p.id === id);
        if (!producto) {
            throw new NotFoundException(`Producto con id ${id} no encontrado`);
        }
        return producto;
    }
}