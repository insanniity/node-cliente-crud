import {Request, Response} from "express";
import {IClient} from "../models/client";
import ClientRepository from "../models/clientsModel"


const home = async (req: Request, res: Response, next:any) => {
    res.redirect('/clientes');
}

const index = async (req: Request, res: Response, next:any) => {
    const clientes = await ClientRepository.findAll();
    res.render('index', {clientes});
}

const show = async (req: Request, res: Response, next:any) => {
    const cliente = await ClientRepository.findByPk(req.params.id);
    res.render('show', {cliente});
}

const create = async (req: Request, res: Response, next:any) => {
    res.render('create');
}

const store = async (req: Request, res: Response, next:any) => {
    try{
        await ClientRepository.create(req.body as IClient);
        res.redirect('/clientes');
    }catch(error){
        console.log(error);
        res.status(500).send('Erro ao criar cliente').end();
    }
}

const edit = async (req: Request, res: Response, next:any) => {
    try{
        const cliente = await ClientRepository.findByPk(req.params.id);
        if(!cliente){
            res.status(404).send('Cliente não encontrado').end();
        }else{
            res.status(200).render('edit', {cliente});
        }
        // res.render('edit', {cliente});
    }catch(error){
        console.log(error);
        res.status(500).send('Erro ao editar cliente').end();
    }
    
}


const update = async (req: Request, res: Response, next:any) => {
    try{
        await ClientRepository.update(req.body as IClient, {where: {id: req.params.id}});
        res.redirect('/clientes');
    }catch(error){
        console.log(error);
        res.status(500).send('Erro ao atualizar cliente').end();
    }
}

const destroy = async (req: Request, res: Response, next:any) => {
    try{
        await ClientRepository.destroy({where: {id: req.params.id}});
        res.redirect('/clientes');
    }catch(error){
        console.log(error);
        res.status(500).send('Erro ao atualizar cliente').end();
    }
}


export default {index, show, create, store, edit, update, destroy, home};