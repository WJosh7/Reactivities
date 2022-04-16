using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{   
    [ApiController]
    [Route("api/[controller]")] //api/activities will be the api url for this controller
    public class BaseApiController:ControllerBase
    {
        
    }
}