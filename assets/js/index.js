$("#add_project").submit(function(event){
    alert("Data inserted succesfully")
})
$("#update_project").submit(function(event){
    event.preventDefault();
    
    var unindexed_array=$(this).serializeArray();

    var data={}
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
       
    })
    console.log(data);

    var request={
        "url":`http://localhost:7000/api/projects/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("data updated succesfully");
        window.location.href = "/";
    })
})

if(window.location.pathname=="/"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
   
    var request={
        "url":`http://localhost:7000/api/projects/${id}`,
        "method":"DELETE",
        
    }

    if(confirm("Are you sure about this deletion")){
        $.ajax(request).done(function(response){
            alert("data delete succesfully");
            location.reload()
        })
    }
})
}