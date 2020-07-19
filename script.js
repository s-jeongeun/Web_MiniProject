var startTime = 0;

// 동영상 불러오기
function loadYtb(){
	var url = document.getElementById("youtubeLink").value;
	var addr = url.split("=");
	document.getElementById("ytbPlayer").setAttribute("src", 
		"https://www.youtube.com/embed/" + addr[1] + "?start=" + startTime);
}

// 북마크 리스트 작성
var listIndex = 0;
function createNewList(){
	var inputItem = document.getElementById("newItem");
	var bookMarkList = document.getElementById("bookMarks")
		
	var listItem = document.createElement("li");
	var inputItem1 = document.createElement("span");
	var inputItem2 = document.createElement("input");	// 이동 버튼
	var inputItem3 = document.createElement("input");	// 삭제 버튼
	
	inputItem1.id = "bmText" + listIndex;
	inputItem1.innerHTML = inputItem.value;
	
	inputItem2.type = "button";
	inputItem2.id = "moveBtn" + listIndex;
	inputItem2.className = "move";
	
	inputItem3.type = "button";
	inputItem3.id = "deleteBtn" + listIndex;
	inputItem3.className = "delete";
		
	listItem.appendChild(inputItem1);
	listItem.appendChild(inputItem2);
	listItem.appendChild(inputItem3);
	
	bookMarkList.appendChild(listItem);
	
	// 이동 버튼
	document.getElementById("moveBtn" + listIndex).addEventListener("click", function() {
		var thisText = inputItem1.innerHTML;
		var hour = Number(thisText.substring(0,2));
		var min = Number(thisText.substring(3,5));
		var sec = Number(thisText.substring(6,8));
		var sum = (hour * 3600) + (min * 60) + sec;
		startTime = sum.toString();
		
		loadYtb();
    })
	
	// 삭제 버튼
	document.getElementById("deleteBtn" + listIndex).addEventListener("click", function() {
		this.parentElement.remove();
    });

	listIndex++;
	inputItem.value = "";
}

