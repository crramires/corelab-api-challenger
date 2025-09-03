import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext"
import ToDo from "App/Models/ToDo"

export default class ToDosController {

    public async index({request}: HttpContextContract){
        const {favorite, color} = request.qs()
        const query = ToDo.query()

        if(favorite !== undefined){
            query.where('is_favorite', favorite === 'true')
        }

        if(color){
            query.where('color', color)
        }

        query.orderBy('is_favorite', 'desc')

        const todos = await query
        return todos
    }

    public async store({request}: HttpContextContract){
        const data = request.only(['title', 'description', 'color', 'isFavorite'])
        const todo = await ToDo.create(data)
        return todo
    }

    public async show({params}: HttpContextContract){
        const todo = await ToDo.find(params.id)
        return todo || { error: 'ToDo not found'}
    }

    public async update({params, request}: HttpContextContract){
        const todo = await ToDo.find(params.id)
        if(!todo) return { error: 'ToDo not found'}

        todo.merge(request.only(['title', 'description', 'color', 'isFavorite']))
        await todo.save()
        return todo
    }

    public async destroy({params}: HttpContextContract){
        const todo = await ToDo.find(params.id)
        if(!todo) return { error: 'ToDo not found'}

        await todo.delete()
        return todo
    }


    public async toggleFavorite({params}: HttpContextContract){
        const todo = await ToDo.find(params.id)
        if(!todo) return { error: 'ToDo not found'}

        todo.isFavorite = !todo.isFavorite
        await todo.save()
        return todo
    }

}