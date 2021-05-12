// 지문 출력
var questionTitle = [
    "나는 내향적인 성격이다.(Introversion)",
    "나는 외향적인 성격이다.(Extraversion)",
    "나는 감각적인 성격이다.(Sense)",
    "나는 직관적인 성격이다.(iNtuition)",
    "나는 사실 관계가 중요하다고 생각한다.(Thinking)",
    "나는 사람 관계가 중요하다고 생각한다.(Feeling)",
    "나는 계획적이다.(Judging)",
    "나는 즉흥적이다.(Perceiving)"
];

var questionNum = [
    "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"
]

var questionScore =[
    "5" , "4", "3", "2", "1"
];

var htmlStr = '';
htmlStr += '<div>';
for(var i=0; i<questionTitle.length; i++) {
    htmlStr += '    <p class="lead">' + questionNum[i] + ' ' + questionTitle[i] + '</p>';
    htmlStr += '   <span class="rating" style="margin-bottom:18px;">'
    for(var j=0; j<questionScore.length; j++) {
        htmlStr += '        <input id="rating' + questionScore[j] + questionNum[i] 
                                + '" type="radio" name="' + questionNum[i] + '" value="' + questionScore[j] + '">';
        htmlStr += '<label for="rating' + questionScore[j] + questionNum[i] + '">' + questionScore[j] + '</label>';
    }
    htmlStr += '    </span>' 
}
htmlStr += '</div>';




$(document).ready(function(){
    dataList();
});

function dataList() {
    $('#questionData').append(htmlStr);
}

// 점수 계산
// 문제 번호=각 성향 : q1=iScore
function scoreShow(){
    var iScore=0;
    var eScore=0;
    var sScore=0;
    var nScore=0;
    var tScore=0;
    var fScore=0;
    var jScore=0;
    var pScore=0;
    for(var i=0; i<questionNum.length; i++) {
        // for(var j=0; j<questionScore.length; j++) {
            // console.log($('#rating' + questionScore[j] + questionNum[i]).val());
            // console.log($('input[name="q' + [i] + '"]:checked').val());
            // $('input[name="rdo"]:checked').val();
        // }
        // console.log($('input[name="q' + [i] + '"]:checked').val());

        // console.log(questionNum[i])
        if($('input[name=' + questionNum[i] + ']:checked').val() == undefined) {
            alert(questionNum[i] + "의 점수를 선택하세요");
            return;
        }

        if(questionNum[i]=="q1"){
            iScore = $('input[name=' + questionNum[i] + ']:checked').val();
        } else if (questionNum[i]=="q2") {
            eScore = $('input[name=' + questionNum[i] + ']:checked').val();
        } else if (questionNum[i]=="q3") {
            sScore = $('input[name=' + questionNum[i] + ']:checked').val();
        } else if (questionNum[i]=="q4") {
            nScore = $('input[name=' + questionNum[i] + ']:checked').val();
        } else if (questionNum[i]=="q5") {
            tScore = $('input[name=' + questionNum[i] + ']:checked').val();
        } else if (questionNum[i]=="q6") {
            fScore = $('input[name=' + questionNum[i] + ']:checked').val();
        } else if (questionNum[i]=="q7") {
            jScore = $('input[name=' + questionNum[i] + ']:checked').val();
        } else if (questionNum[i]=="q8") {
            pScore = $('input[name=' + questionNum[i] + ']:checked').val();
        }
    }

    // console.log(iScore, eScore, sScore, nScore, tScore, fScore, jScore, pScore);
    // document.write("Introversion : " + iScore + "<br>");
    // document.write("Extraversion : " + eScore + "<br>");
    // document.write("Sense : " + sScore + "<br>");
    // document.write("iNtuition : " + nScore + "<br>");
    // document.write("Thinking : " + tScore + "<br>");
    // document.write("Feeling : " + fScore + "<br>");
    // document.write("Judging : " + jScore + "<br>");
    // document.write("Perceiving : " + pScore + "<br><br>");

    var result=[];
    if (eScore >= iScore){
        result[0]="E";
    } else {
        result[0]="I";
    }
    if (sScore >= nScore){
        result[1]="S";
    } else {
        result[1]="N";
    }
    if (tScore >= fScore){
        result[2]="T";
    } else {
        result[2]="F";
    }
    if (jScore >= pScore){
        result[3]="J";
    } else {
        result[3]="P";
    }
    // console.log('----------->> : ' + result[0])
    document.write("동일 점수일땐 ESTJ를 우선해서 표시한다."+ "<br><br>")
    document.write("당신의 MBTI는 " + result[0] + result[1] + result[2] + result[3] +" 입니다." + "<br><br>");
    var url = "https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-" + (result[0] + result[1] + result[2] + result[3]).toLowerCase();
    var href = '<a href =' + url +  ' class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">성격 설명 보기</a>';
    document.write(result[0] + result[1] + result[2] + result[3] + "의 " + href);

}

