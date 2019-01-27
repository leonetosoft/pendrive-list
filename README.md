List pendrives, use wmic, only windows.

**Suported Plataforms**
* Windows

**Instructions**

    const  list  =  require('pendrive-list');
    
    // using sync function
    console.log(await  list.ListPenDrive());
    
    // or using promise
    list.ListPenDrive().then(pendrives  => {
	    console.log(pendrives);
    }).catch(err  => {
	    console.log(err);
    });


Print:

    [ { name: 'UBUNTU-SERV', path: 'E:' } ]


