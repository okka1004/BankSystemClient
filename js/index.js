
    function searchAllMember() {



        $.ajax({
            //url: 서버 프로그램의 url
            url:"http://localhost:8080/bank/selectAllMember",
            //서버프로그램을 호출하는 방식 type을 생략하면 기본값으로 GET 방식을 사용한다.
            type: "GET",
            //dataType: 만약 jsonp방식으로 할 거면 명시
            dataType: "jsonp",
            //만약 jsonp 방식을 이용하면 jsonp 속성이 나와야 한다.
            jsonp: "callback",
            //만약 전달할 데이터가 있으면 data를 넣어줘야 한다.
            //3초만 기다리겠다는 것을 명시
            timeout: 3000,
            //성공하면 호출된다.
            success: function(result){
                //성공했을때의 화면처리

                $("#memberAll").empty();

                for(var i=0 ; i<result.length;i++){

                    var tr=$("<tr></tr>").attr("data-id", result[i].memberId);
                    var memberId=$("<td></td>").text(result[i].memberId);
                    var memberName=$("<td></td>").text(result[i].memberName);
                    var memberAccount=$("<td></td>").text(result[i].memberAccount);
                    var memberBalance=$("<td></td>").text(result[i].memberBalance);
                    tr.append(memberId);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#memberAll").append(tr);

                }
            },
            //실패하면 호출된다.
            error: function(){
                alert("Something wrong with the server");
            }
        });

    }

    function searchMember() {

        if(event.keyCode == 13) {


            var id = $("#memberId").val();

            $.ajax({
                //url: 서버 프로그램의 url
                url: "http://localhost:8080/bank/selectMember",
                type: "GET",
                dataType: "jsonp",
                jsonp: "callback",
                data: {
                    memberId: id
                },
                success: function (result) {
                    //성공했을때의 화면처리

                    $("#memberAll").empty();
                    for (var i = 0; i < result.length; i++) {
                        var tr = $("<tr></tr>").attr("data-id", result[i].memberId);
                        var memberId = $("<td></td>").text(result[i].memberId);
                        var memberName = $("<td></td>").text(result[i].memberName);
                        var memberAccount = $("<td></td>").text(result[i].memberAccount);
                        var memberBalance = $("<td></td>").text(result[i].memberBalance);
                        tr.append(memberId);
                        tr.append(memberName);
                        tr.append(memberAccount);
                        tr.append(memberBalance);

                        $("#memberDetail").append(tr);
                    }
                },
                //실패하면 호출된다.
                error: function () {
                    alert("Something wrong with the server");
                }
            });

        }
    }

    function inputBalance() {

        var id=$("#depositMemberId").val();
        var money=$("#depositMemberBalance").val();

        $.ajax({

            url:"http://localhost:8080/bank/deposit",
            dataType:"jsonp",
            jsonp:"callback",
            data:{
                memberId : id,
                memberBalance : money
            },
            success:function (result) {
                alert("성공");
                $("#depositMemberId").val("");
                $("#depositMemberBalance").val("");
            },
            error:function () {
                alert("실패");
            }
        });


    }

    function withrawBalance() {

        var id=$("#withdrawMemberId").val();
        var money=$("#withdrawMemberBalance").val();


        $.ajax({

            url:"http://localhost:8080/bank/withdraw",
            dataType:"jsonp",
            jsonp:"callback",
            data:{
                memberId : id,
                memberBalance : money
            },
            success:function (result) {
                alert("성공");
                $("#withdrawMemberId").val("");
                $("#withdrawMemberBalance").val("");
            },
            error:function () {
                alert("실패");
            }
        });
    }
    
    function transferBalance() {

        var sendmemberid=$("#sendMemberId").val();
        var receivememberid=$("#receiveMemberBalance").val();
        var money=$("#transferBalance").val();

        $.ajax({

            url:"http://localhost:8080/bank/transfer",
            dataType:"jsonp",
            jsonp:"callback",
            data:{
                sendId : sendmemberid,
                receiveId: receivememberid,
                memberBalance : money
            },
            success:function (result) {
                alert("성공");
                $("#sendMemberId").val("");
                $("#receiveMemberBalance").val("");
                $("#transferBalance").val("");
            },
            error:function () {
                alert("실패");
            }
        });
    }

    function checkMember() {
        var id = $("#checkMemberId").val();

        $.ajax({
            //url: 서버 프로그램의 url
            url: "http://localhost:8080/bank/selectHistory",
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback",
            data: {
                memberId: id
            },
            success: function (result) {
                //성공했을때의 화면처리

                $("#look").empty();
                for (var i = 0; i < result.length; i++) {
                    var tr = $("<tr></tr>").attr("data-id", result[i].memberId);
                    var memberId = $("<td></td>").text(result[i].memberId);
                    var memberAccount = $("<td></td>").text(result[i].kind);
                    var memberBalance = $("<td></td>").text(result[i].memberBalance);
                    var date = $("<td></td>").text(result[i].date);

                    tr.append(memberId);
                    tr.append(memberAccount);
                    tr.append(memberBalance);
                    tr.append(date);

                    $("#look").append(tr);
                }
            },
            //실패하면 호출된다.
            error: function () {
                alert("Something wrong with the server");
            }

        });
    }
