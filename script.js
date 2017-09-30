var app = {

	getProjects: function() {
		return $.ajax({
	           	url: "http://localhost:52196/api/project"
	    })
	}
};

$( document ).ready(function() {
    console.log( "ready!" );

    var projectsDiv = $('#app-projects');


    app.getProjects().then(function(projects) {

		var html = `<button type="button" id="app-create" class="btn btn-success btn-block"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Новый проект</button>
        <div class="list-group">`;

        $.each(projects, function(index, project) {

        	if(project.State == 0) {
                var label = `<span class="label label-success right">active</span>`;
            }
            else if(project.State == 1) {
                var label = `<span class="label label-warning right">postponed</span>`;
            }
            else {
                var label = `<span class="label label-danger right">closed</span>`;
            }

            html += `<a href="#" class="list-group-item">` + project.Name + label + `</a>`;

        });

        html += `</div>`;
        
        projectsDiv.append(html);

        $('#app-create').click(function() {
    		console.log("E boy!!!");
    	});
    });
});