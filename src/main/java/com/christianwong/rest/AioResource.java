package com.christianwong.rest;
 
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
 
@Path("/aio")
public class AioResource {
 
    @GET
    @Produces("text/plain")
    public String getMessage() {
        return "Aio, World!";
    }

    @GET
    @Path("{name}")
    @Produces("text/plain")
    public String getMessage(@PathParam("name") String name) {
        return "Aio, " + name + "!";
    }

}