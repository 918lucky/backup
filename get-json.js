fetch("https://raw.githubusercontent.com/918lucky/test/main/918lucky.json")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.querySelector("#whatsAppLink").href = data.whatsAppLink;
                document.querySelector("#telegramLink").href = data.telegramLink;
                document.querySelector("#mega888Link").href = data.mega888Link;
                document.querySelector("#pussy888Link").href = data.pussy888Link;
                document.querySelector("#a918KissKayaLink").href = data.a918KissKayaLink;
                document.querySelector("#evo888Link").href = data.evo888Link;
                document.querySelector("#a918KissLink").href = data.a918KissLink;
                document.querySelector("#PlayBoyLink").href = data.PlayBoyLink;
                document.querySelector("#a1slotLink").href = data.a1slotLink;
                document.querySelector("#xe88Link").href = data.xe88Link;
                document.querySelector("#visionTitle1").innerText = data.visionTitle1;
                document.querySelector("#visionText1").innerText = data.visionText1;
                document.querySelector("#visionTitle2").innerText = data.visionTitle2;
                document.querySelector("#visionText2").innerText = data.visionText2;
                document.querySelector("#visionTitle3").innerText = data.visionTitle3;
                document.querySelector("#visionText3").innerText = data.visionText3;
                document.querySelector("#visionTitle4").innerText = data.visionTitle4;
                document.querySelector("#visionText4").innerText = data.visionText4;
                document.querySelector("#visionTitle5").innerText = data.visionTitle5;
                document.querySelector("#visionText5").innerText = data.visionText5;
                document.querySelector("#visionTitle6").innerText = data.visionTitle6;
                document.querySelector("#visionText6").innerText = data.visionText6;
                document.querySelector("#myBtnWA").href = data.whatsAppLink;
                document.querySelector("#myBtnTG").href = data.telegramLink;
                document.querySelector("#youTubeVideoLink").src = data.youTubeVideoLink;
            })