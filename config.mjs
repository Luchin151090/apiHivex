import pgPromise from 'pg-promise';

const pgp = pgPromise();

const connectionStr = "postgres://postgres:1234@localhost:5432/hivex";
//const connectionStr = "postgresql://aguasol:TntaHgQf9msnfmHXdrQWEXHEt1hut1MC@dpg-cml86oacn0vc739oj51g-a.oregon-postgres.render.com/aguasol_ui5l";
//const connectionStr = "postgres://aguasol:TntaHgQf9msnfmHXdrQWEXHEt1hut1MC@dpg-cml86oacn0vc739oj51g-a/aguasol_ui5l";
//const connectionStr = "postgres://aguasol:TntaHgQf9msnfmHXdrQWEXHEt1hut1MC@dpg-cml86oacn0vc739oj51g-a.oregon-postgres.render.com/aguasol_ui5l";
export const db_pool = pgp({
    connectionString: connectionStr,
   /*ssl: {
      rejectUnauthorized: false, // Puedes ajustar esto según tus necesidades de seguridad
    },*/
});

try{
    db_pool.connect()
    .then(obj=>{
        console.log("HIVEX DB CONNECTED !");
        obj.done();
    })
    .catch(err=>{
        console.log("NO CONNECTED HIVEX:",err);
    })
    //
}
catch(err){
    console.log(`ERROR CONFIGURATION: ${err}`);
}