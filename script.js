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
    var stateArray =  ['active', 'postponed', 'closed'];
    var colorState = ["label label-success right", "label label-warning right", "label label-danger right"];


    app.getProjects().then(function(projects) {

		var html = `<button type="button" id="app-create" class="btn btn-success btn-block"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Новый проект</button>
        <div class="list-group">`;

        $.each(projects, function(index, project) {
            var label = `<span class="` + colorState[project.State] + `">` + stateArray[project.State] + `</span>`;
            html += `<a href="#" class="list-group-item">` + project.Name + label + `</a>`;
        });

        html += `</div>`;
        
        projectsDiv.append(html);

        $('#app-create').click(function() {
    		console.log("E boy!!!");
    	});
    });
});