import EventService from "./services";
import EventSerializer from "./serializer";
import express from 'express';

export default class EventController {
    /**
     * @type {EventService}
     */
    eventService;
    /**
     * @type {EventSerializer}
     */
    eventSerializer;

    constructor(eventService,eventSerializer) {
        this.eventService = eventService;
        this.eventSerializer = eventSerializer
    }

    /**
     *
     * @param {Request} req
     * @param res
     */
    getAll(req, res){
        let events = this.eventService.getEvents();
        res.send(this.eventSerializer.serialize(events))
    }

    /**
     *
     * @param {Request} req
     * @param res
     */
    getFirst(req, res){
        let event = this.eventService.getFirstEvent();
        res.send(this.eventSerializer.serialize(event))
    }

    /**
     *
     * @param {Request} req
     * @param res
     */
    getLast(req, res){
        let event = this.eventService.getLastEvent();
        res.send(this.eventSerializer.serialize(event))
    }

    /**
     *
     * @param {Request} req
     * @param res
     */
    getLongest(req, res){
        let event = this.eventService.getLongestEvent();
        res.send(this.eventSerializer.serialize(event))
    }

    /**
     *
     * @param {Request} req
     * @param res
     */
    getShortest(req, res){
        let event = this.eventService.getShortestEvent();
        res.send(this.eventSerializer.serialize(event))
    }
}