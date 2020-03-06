var db = openDatabase('db_app_events', '1.0', 'DB for Eventos App', 20 * 1024 * 1024);

/*
db.transaction(function(cmd){
    var vFlag = 0;
    cmd.executeSql('CREATE TABLE IF NOT EXISTS users (id unique, pwd, name, phone, email, job_title, status, login, type, id_dms, license, id_pdv_dlr)');
});*/


function ejecutaSQL(vQuery, vFlag){
    db.transaction(function(cmd){              
            //console.log(vQuery);
            cmd.executeSql(vQuery, [], function(){ 

            },function(e){
                //alert('e');
                console.log('Error' + e.error);
                //window.plugins.toast.show('Error..', 1000, 'bottom');
            });
    });
}