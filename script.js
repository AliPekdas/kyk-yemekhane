const mealData = {
    istanbul: {
        breakfast: [
            { date: "01.10.2025 Çarşamba", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Helva, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "02.10.2025 Perşembe", food: "Sade Omlet, Dere Otlu Poğaça, Kaşar Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "03.10.2025 Cuma", food: "Karışık Pizza, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "04.10.2025 Cumartesi", food: "Sucuklu Yumurta, Sade Açma, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "05.10.2025 Pazar", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "06.10.2025 Pazartesi", food: "Menemen, Çikolatalı Milföy Börek, Labne Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "07.10.2025 Salı", food: "Sosis Kokteyl (Salçalı veya Kızartma), Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "08.10.2025 Çarşamba", food: "Kaşarlı Omlet, Mozaik Kek, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "09.10.2025 Perşembe", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Helva, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "10.10.2025 Cuma", food: "Peynirli Omlet, Patates Kroket, Kaşar Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "11.10.2025 Cumartesi", food: "Karışık Pizza, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "12.10.2025 Pazar", food: "Sade Omlet, Zeytinli/Peynirli Açma, Kaşar Peynir, Siyah/Yeşil Zeytin, Bal+Tereyağ, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "13.10.2025 Pazartesi", food: "Peynirli Börek, Haşlanmış Yumurta, Krem Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "14.10.2025 Salı", food: "Sucuklu Yumurta, Peynirli Milföy Börek, Kaşar Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "15.10.2025 Çarşamba", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "16.10.2025 Perşembe", food: "Sade Omlet, Dere Otlu Poğaça, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "17.10.2025 Cuma", food: "Karışık Pizza, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "18.10.2025 Cumartesi", food: "Menemen, Simit, Kaşar Peynir, Siyah/Yeşil Zeytin, Muz, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "19.10.2025 Pazar", food: "Karışık Kızartma, Haşlanmış Yumurta, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "20.10.2025 Pazartesi", food: "Sade Omlet, Meyveli Kek, Beyaz Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "21.10.2025 Salı", food: "Peynirli Börek, Haşlanmış Yumurta, Krem Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "22.10.2025 Çarşamba", food: "Sucuklu Yumurta, Peynirli Milföy Börek, Kaşar Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "23.10.2025 Perşembe", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "24.10.2025 Cuma", food: "Sade Omlet, Dere Otlu Poğaça, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" }
        ],
        dinner: [
            { date: "01.10.2025 Çarşamba", food: "Mercimek Çorba / Tarhana Çorba, Çiftlik Kebabı / Zeytinyağlı Taze Fasulye, Nohutlu Pirinç Pilavı, Çoban Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "02.10.2025 Perşembe", food: "Ezogelin Çorba / Toyga Çorba, Tavuklu Çökertme Kebabı / Ispanak Yemeği+Yoğurt, Soslu Makarna, Browni, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "03.10.2025 Cuma", food: "Mercimek Çorba / Şehriye Çorba, Nohut Yemeği / Mevsim Türlü, Pirinç Pilavı, Cevizli Kadayıf, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "04.10.2025 Cumartesi", food: "Ezogelin Çorba / Cennet Çorba, Tavuk Külbastı+Elma Dilim Patates / Patates Köftesi+Yoğurt, Spagetti Napoliten, Elma, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "05.10.2025 Pazar", food: "Mercimek Çorba / Domates Çorba, Patlıcan Musakka / Bezelye Yemeği, Bulgur Pilavı, Bahçe Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "06.10.2025 Pazartesi", food: "Ezogelin Çorba / Kremalı Sebze Çorba, Tavuklu Pilav / Karışık Dolma, Soslu Karışık Kızartma, Ayran, Şekerpare, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "07.10.2025 Salı", food: "Mercimek Çorba / Yüksük Çorba, Ekşili Köfte / Mücver+Yoğurt, Soslu Makarna, Çiğ Köfte (Marul+Limon), 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "08.10.2025 Çarşamba", food: "Ezogelin Çorba / Kremalı Tavuk Çorba, Hünkar Beğendi / Barbunya Yemeği, Şehriyeli Pirinç Pilavı, Muzlu Magnolia, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "09.10.2025 Perşembe", food: "Mercimek Çorba / Tarhana Çorba, Çiftlik Kebabı / Zeytinyağlı Taze Fasulye, Nohutlu Pirinç Pilavı, Çoban Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "10.10.2025 Cuma", food: "Ezogelin Çorba / Düğün Çorba, Kuru Fasulye / Karışık Sebze Graten, Pirinç Pilavı, Kıbrıs Tatlısı, Turşu, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "11.10.2025 Cumartesi", food: "Mercimek Çorba / Şehriye Çorba, Pideli Köfte+Domates+Biber / Ispanak Yemeği+Yoğurt, Bulgur Pilavı, Havuç Tarator, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "12.10.2025 Pazar", food: "Ezogelin Çorba / Kremalı Sebze Çorba, Şinitzel+Elma Dilim Patates / Karışık Kızartma, Fesleğen Soslu Makarna, Kuru Cacık, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "13.10.2025 Pazartesi", food: "Mercimek Çorba / Domates Çorba, Bahçevan Kebabı / Nohut Tava, Bulgur Pilavı, Sütlaç, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "14.10.2025 Salı", food: "Ezogelin Çorba / Yayla Çorba, Tavuk Burger / Bezelye Yemeği, Köri Soslu Makarna, Ayran, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "15.10.2025 Çarşamba", food: "Mercimek Çorba / Yüksük Çorba, Karnıyarık / Mevsim Türlü, Şehriyeli Pirinç Pilavı, Gavurdağı Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "16.10.2025 Perşembe", food: "Ezogelin Çorba / Toyga Çorba, Sebzeli Tavuk Kavurma / Karışık Dolma, Spagetti Napoliten, Bisküvili Pasta, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "17.10.2025 Cuma", food: "Mercimek Çorba / Tarhana Çorba, Beyti Kebab+Yoğurt+Sos+Domates+Biber / Zeytinyağlı Taze Fasulye, Bulgur Pilavı, Kaşık Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "18.10.2025 Cumartesi", food: "Ezogelin Çorba / Brokoli Çorba, Çıtır Tavuk+Elma Dilim Patates / Karışık Kızartma, Mantı+Yoğurt+Sos, Mercimek Köftesi+Marul+Limon, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "19.10.2025 Pazar", food: "Mercimek Çorba / Şehriye Çorba, Kuru Fasulye / Karnabahar Kızartması+Yoğurt, Pirinç Pilavı, Cevizli Baklava, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "20.10.2025 Pazartesi", food: "Ezogelin Çorba / Kremalı Sebze Çorba, Şinitzel+Elma Dilim Patates / Karışık Kızartma, Fesleğen Soslu Makarna, Kuru Cacık, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "21.10.2025 Salı", food: "Mercimek Çorba / Domates Çorba, Bahçevan Kebabı / Nohut Tava, Bulgur Pilavı, Sütlaç, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "22.10.2025 Çarşamba", food: "Ezogelin Çorba / Yayla Çorba, Tavuk Burger / Bezelye Yemeği, Köri Soslu Makarna, Ayran, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "23.10.2025 Perşembe", food: "Mercimek Çorba / Yüksük Çorba, Karnıyarık / Mevsim Türlü, Şehriyeli Pirinç Pilavı, Gavurdağı Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "24.10.2025 Cuma", food: "Ezogelin Çorba / Toyga Çorba, Sebzeli Tavuk Kavurma / Karışık Dolma, Spagetti Napoliten, Bisküvili Pasta, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" }
        ]
    },
    ankara: {
        breakfast: [
            { date: "01.10.2025 Çarşamba", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Helva, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "02.10.2025 Perşembe", food: "Sade Omlet, Dere Otlu Poğaça, Kaşar Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "03.10.2025 Cuma", food: "Karışık Pizza, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "04.10.2025 Cumartesi", food: "Sucuklu Yumurta, Sade Açma, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "05.10.2025 Pazar", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "06.10.2025 Pazartesi", food: "Menemen, Çikolatalı Milföy Börek, Labne Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "07.10.2025 Salı", food: "Sosis Kokteyl (Salçalı veya Kızartma), Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "08.10.2025 Çarşamba", food: "Kaşarlı Omlet, Mozaik Kek, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "09.10.2025 Perşembe", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Helva, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "10.10.2025 Cuma", food: "Peynirli Omlet, Patates Kroket, Kaşar Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "11.10.2025 Cumartesi", food: "Karışık Pizza, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "12.10.2025 Pazar", food: "Sade Omlet, Zeytinli/Peynirli Açma, Kaşar Peynir, Siyah/Yeşil Zeytin, Bal+Tereyağ, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "13.10.2025 Pazartesi", food: "Peynirli Börek, Haşlanmış Yumurta, Krem Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "14.10.2025 Salı", food: "Sucuklu Yumurta, Peynirli Milföy Börek, Kaşar Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "15.10.2025 Çarşamba", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "16.10.2025 Perşembe", food: "Sade Omlet, Dere Otlu Poğaça, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "17.10.2025 Cuma", food: "Karışık Pizza, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "18.10.2025 Cumartesi", food: "Menemen, Simit, Kaşar Peynir, Siyah/Yeşil Zeytin, Muz, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "19.10.2025 Pazar", food: "Karışık Kızartma, Haşlanmış Yumurta, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "20.10.2025 Pazartesi", food: "Sade Omlet, Meyveli Kek, Beyaz Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "21.10.2025 Salı", food: "Peynirli Börek, Haşlanmış Yumurta, Krem Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "22.10.2025 Çarşamba", food: "Sucuklu Yumurta, Peynirli Milföy Börek, Kaşar Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "23.10.2025 Perşembe", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "24.10.2025 Cuma", food: "Sade Omlet, Dere Otlu Poğaça, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" }
        ],
        dinner: [
            { date: "01.10.2025 Çarşamba", food: "Mercimek Çorba / Tarhana Çorba, Çiftlik Kebabı / Zeytinyağlı Taze Fasulye, Nohutlu Pirinç Pilavı, Çoban Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "02.10.2025 Perşembe", food: "Ezogelin Çorba / Toyga Çorba, Tavuklu Çökertme Kebabı / Ispanak Yemeği+Yoğurt, Soslu Makarna, Browni, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "03.10.2025 Cuma", food: "Mercimek Çorba / Şehriye Çorba, Nohut Yemeği / Mevsim Türlü, Pirinç Pilavı, Cevizli Kadayıf, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "04.10.2025 Cumartesi", food: "Ezogelin Çorba / Cennet Çorba, Tavuk Külbastı+Elma Dilim Patates / Patates Köftesi+Yoğurt, Spagetti Napoliten, Elma, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "05.10.2025 Pazar", food: "Mercimek Çorba / Domates Çorba, Patlıcan Musakka / Bezelye Yemeği, Bulgur Pilavı, Bahçe Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "06.10.2025 Pazartesi", food: "Ezogelin Çorba / Kremalı Sebze Çorba, Tavuklu Pilav / Karışık Dolma, Soslu Karışık Kızartma, Ayran, Şekerpare, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "07.10.2025 Salı", food: "Mercimek Çorba / Yüksük Çorba, Ekşili Köfte / Mücver+Yoğurt, Soslu Makarna, Çiğ Köfte (Marul+Limon), 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "08.10.2025 Çarşamba", food: "Ezogelin Çorba / Kremalı Tavuk Çorba, Hünkar Beğendi / Barbunya Yemeği, Şehriyeli Pirinç Pilavı, Muzlu Magnolia, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "09.10.2025 Perşembe", food: "Mercimek Çorba / Tarhana Çorba, Çiftlik Kebabı / Zeytinyağlı Taze Fasulye, Nohutlu Pirinç Pilavı, Çoban Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "10.10.2025 Cuma", food: "Ezogelin Çorba / Düğün Çorba, Kuru Fasulye / Karışık Sebze Graten, Pirinç Pilavı, Kıbrıs Tatlısı, Turşu, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "11.10.2025 Cumartesi", food: "Mercimek Çorba / Şehriye Çorba, Pideli Köfte+Domates+Biber / Ispanak Yemeği+Yoğurt, Bulgur Pilavı, Havuç Tarator, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "12.10.2025 Pazar", food: "Ezogelin Çorba / Kremalı Sebze Çorba, Şinitzel+Elma Dilim Patates / Karışık Kızartma, Fesleğen Soslu Makarna, Kuru Cacık, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "13.10.2025 Pazartesi", food: "Mercimek Çorba / Domates Çorba, Bahçevan Kebabı / Nohut Tava, Bulgur Pilavı, Sütlaç, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "14.10.2025 Salı", food: "Ezogelin Çorba / Yayla Çorba, Tavuk Burger / Bezelye Yemeği, Köri Soslu Makarna, Ayran, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "15.10.2025 Çarşamba", food: "Mercimek Çorba / Yüksük Çorba, Karnıyarık / Mevsim Türlü, Şehriyeli Pirinç Pilavı, Gavurdağı Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "16.10.2025 Perşembe", food: "Ezogelin Çorba / Toyga Çorba, Sebzeli Tavuk Kavurma / Karışık Dolma, Spagetti Napoliten, Bisküvili Pasta, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "17.10.2025 Cuma", food: "Mercimek Çorba / Tarhana Çorba, Beyti Kebab+Yoğurt+Sos+Domates+Biber / Zeytinyağlı Taze Fasulye, Bulgur Pilavı, Kaşık Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "18.10.2025 Cumartesi", food: "Ezogelin Çorba / Brokoli Çorba, Çıtır Tavuk+Elma Dilim Patates / Karışık Kızartma, Mantı+Yoğurt+Sos, Mercimek Köftesi+Marul+Limon, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "19.10.2025 Pazar", food: "Mercimek Çorba / Şehriye Çorba, Kuru Fasulye / Karnabahar Kızartması+Yoğurt, Pirinç Pilavı, Cevizli Baklava, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "20.10.2025 Pazartesi", food: "Ezogelin Çorba / Kremalı Sebze Çorba, Şinitzel+Elma Dilim Patates / Karışık Kızartma, Fesleğen Soslu Makarna, Kuru Cacık, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "21.10.2025 Salı", food: "Mercimek Çorba / Domates Çorba, Bahçevan Kebabı / Nohut Tava, Bulgur Pilavı, Sütlaç, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "22.10.2025 Çarşamba", food: "Ezogelin Çorba / Yayla Çorba, Tavuk Burger / Bezelye Yemeği, Köri Soslu Makarna, Ayran, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "23.10.2025 Perşembe", food: "Mercimek Çorba / Yüksük Çorba, Karnıyarık / Mevsim Türlü, Şehriyeli Pirinç Pilavı, Gavurdağı Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "24.10.2025 Cuma", food: "Ezogelin Çorba / Toyga Çorba, Sebzeli Tavuk Kavurma / Karışık Dolma, Spagetti Napoliten, Bisküvili Pasta, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" }
        ]
    },
    izmir: {
        breakfast: [
            { date: "01.10.2025 Çarşamba", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Helva, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "02.10.2025 Perşembe", food: "Sade Omlet, Dere Otlu Poğaça, Kaşar Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "03.10.2025 Cuma", food: "Karışık Pizza, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "04.10.2025 Cumartesi", food: "Sucuklu Yumurta, Sade Açma, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "05.10.2025 Pazar", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "06.10.2025 Pazartesi", food: "Menemen, Çikolatalı Milföy Börek, Labne Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "07.10.2025 Salı", food: "Sosis Kokteyl (Salçalı veya Kızartma), Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "08.10.2025 Çarşamba", food: "Kaşarlı Omlet, Mozaik Kek, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "09.10.2025 Perşembe", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Helva, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "10.10.2025 Cuma", food: "Peynirli Omlet, Patates Kroket, Kaşar Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "11.10.2025 Cumartesi", food: "Karışık Pizza, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "12.10.2025 Pazar", food: "Sade Omlet, Zeytinli/Peynirli Açma, Kaşar Peynir, Siyah/Yeşil Zeytin, Bal+Tereyağ, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "13.10.2025 Pazartesi", food: "Peynirli Börek, Haşlanmış Yumurta, Krem Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "14.10.2025 Salı", food: "Sucuklu Yumurta, Peynirli Milföy Börek, Kaşar Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "15.10.2025 Çarşamba", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "16.10.2025 Perşembe", food: "Sade Omlet, Dere Otlu Poğaça, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "17.10.2025 Cuma", food: "Karışık Pizza, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Tahinli Pekmez, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "18.10.2025 Cumartesi", food: "Menemen, Simit, Kaşar Peynir, Siyah/Yeşil Zeytin, Muz, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "19.10.2025 Pazar", food: "Karışık Kızartma, Haşlanmış Yumurta, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "20.10.2025 Pazartesi", food: "Sade Omlet, Meyveli Kek, Beyaz Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "21.10.2025 Salı", food: "Peynirli Börek, Haşlanmış Yumurta, Krem Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "22.10.2025 Çarşamba", food: "Sucuklu Yumurta, Peynirli Milföy Börek, Kaşar Peynir, Siyah/Yeşil Zeytin, Reçel Çeşitleri, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "23.10.2025 Perşembe", food: "Patates Kızartması, Haşlanmış Yumurta, Beyaz Peynir, Siyah/Yeşil Zeytin, Sürülebilir Çikolata, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" },
            { date: "24.10.2025 Cuma", food: "Sade Omlet, Dere Otlu Poğaça, Örgü/Çeçil Peynir, Siyah/Yeşil Zeytin, Mevsim Sebzeleri Söğüş, 500 ml Su, Çeyrek Ekmek", calory: "650-850 kalori" }
        ],
        dinner: [
            { date: "01.10.2025 Çarşamba", food: "Mercimek Çorba / Tarhana Çorba, Çiftlik Kebabı / Zeytinyağlı Taze Fasulye, Nohutlu Pirinç Pilavı, Çoban Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "02.10.2025 Perşembe", food: "Ezogelin Çorba / Toyga Çorba, Tavuklu Çökertme Kebabı / Ispanak Yemeği+Yoğurt, Soslu Makarna, Browni, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "03.10.2025 Cuma", food: "Mercimek Çorba / Şehriye Çorba, Nohut Yemeği / Mevsim Türlü, Pirinç Pilavı, Cevizli Kadayıf, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "04.10.2025 Cumartesi", food: "Ezogelin Çorba / Cennet Çorba, Tavuk Külbastı+Elma Dilim Patates / Patates Köftesi+Yoğurt, Spagetti Napoliten, Elma, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "05.10.2025 Pazar", food: "Mercimek Çorba / Domates Çorba, Patlıcan Musakka / Bezelye Yemeği, Bulgur Pilavı, Bahçe Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "06.10.2025 Pazartesi", food: "Ezogelin Çorba / Kremalı Sebze Çorba, Tavuklu Pilav / Karışık Dolma, Soslu Karışık Kızartma, Ayran, Şekerpare, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "07.10.2025 Salı", food: "Mercimek Çorba / Yüksük Çorba, Ekşili Köfte / Mücver+Yoğurt, Soslu Makarna, Çiğ Köfte (Marul+Limon), 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "08.10.2025 Çarşamba", food: "Ezogelin Çorba / Kremalı Tavuk Çorba, Hünkar Beğendi / Barbunya Yemeği, Şehriyeli Pirinç Pilavı, Muzlu Magnolia, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "09.10.2025 Perşembe", food: "Mercimek Çorba / Tarhana Çorba, Çiftlik Kebabı / Zeytinyağlı Taze Fasulye, Nohutlu Pirinç Pilavı, Çoban Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "10.10.2025 Cuma", food: "Ezogelin Çorba / Düğün Çorba, Kuru Fasulye / Karışık Sebze Graten, Pirinç Pilavı, Kıbrıs Tatlısı, Turşu, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "11.10.2025 Cumartesi", food: "Mercimek Çorba / Şehriye Çorba, Pideli Köfte+Domates+Biber / Ispanak Yemeği+Yoğurt, Bulgur Pilavı, Havuç Tarator, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "12.10.2025 Pazar", food: "Ezogelin Çorba / Kremalı Sebze Çorba, Şinitzel+Elma Dilim Patates / Karışık Kızartma, Fesleğen Soslu Makarna, Kuru Cacık, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "13.10.2025 Pazartesi", food: "Mercimek Çorba / Domates Çorba, Bahçevan Kebabı / Nohut Tava, Bulgur Pilavı, Sütlaç, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "14.10.2025 Salı", food: "Ezogelin Çorba / Yayla Çorba, Tavuk Burger / Bezelye Yemeği, Köri Soslu Makarna, Ayran, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "15.10.2025 Çarşamba", food: "Mercimek Çorba / Yüksük Çorba, Karnıyarık / Mevsim Türlü, Şehriyeli Pirinç Pilavı, Gavurdağı Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "16.10.2025 Perşembe", food: "Ezogelin Çorba / Toyga Çorba, Sebzeli Tavuk Kavurma / Karışık Dolma, Spagetti Napoliten, Bisküvili Pasta, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "17.10.2025 Cuma", food: "Mercimek Çorba / Tarhana Çorba, Beyti Kebab+Yoğurt+Sos+Domates+Biber / Zeytinyağlı Taze Fasulye, Bulgur Pilavı, Kaşık Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "18.10.2025 Cumartesi", food: "Ezogelin Çorba / Brokoli Çorba, Çıtır Tavuk+Elma Dilim Patates / Karışık Kızartma, Mantı+Yoğurt+Sos, Mercimek Köftesi+Marul+Limon, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "19.10.2025 Pazar", food: "Mercimek Çorba / Şehriye Çorba, Kuru Fasulye / Karnabahar Kızartması+Yoğurt, Pirinç Pilavı, Cevizli Baklava, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "20.10.2025 Pazartesi", food: "Ezogelin Çorba / Kremalı Sebze Çorba, Şinitzel+Elma Dilim Patates / Karışık Kızartma, Fesleğen Soslu Makarna, Kuru Cacık, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "21.10.2025 Salı", food: "Mercimek Çorba / Domates Çorba, Bahçevan Kebabı / Nohut Tava, Bulgur Pilavı, Sütlaç, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "22.10.2025 Çarşamba", food: "Ezogelin Çorba / Yayla Çorba, Tavuk Burger / Bezelye Yemeği, Köri Soslu Makarna, Ayran, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "23.10.2025 Perşembe", food: "Mercimek Çorba / Yüksük Çorba, Karnıyarık / Mevsim Türlü, Şehriyeli Pirinç Pilavı, Gavurdağı Salata, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" },
            { date: "24.10.2025 Cuma", food: "Ezogelin Çorba / Toyga Çorba, Sebzeli Tavuk Kavurma / Karışık Dolma, Spagetti Napoliten, Bisküvili Pasta, 500 ml Su, Çeyrek Ekmek", calory: "1100-1500 kalori" }
        ]
    }
};

const mainContainer = document.getElementById("container");
const mealToggle = document.getElementById("mealToggle");
const citySelection = document.getElementById("citySelection");

function renderGrid() {
    const selectedCity = citySelection.value;
    const selectedMealType = mealToggle.checked ? "dinner" : "breakfast";
    
    const containerData = mealData[selectedCity][selectedMealType];

    mainContainer.innerHTML = "";
    if (!containerData || containerData.length === 0) {
        mainContainer.innerHTML = "<p>Bu seçim için gösterilecek menü bulunmamaktadır.</p>";
        return;
    }

    let grid = document.createElement("div");
    grid.className = "meal-grid";

    for (let i = 0; i < containerData.length; i++) {
        let item = containerData[i];
        let dayBox = document.createElement("div");
        dayBox.className = "day-box";

        const dateDiv = document.createElement("div");
        dateDiv.className = "date";
        dateDiv.innerHTML = `<p class="date-cnt">${item.date}</p>`;

        const foodDiv = document.createElement("div");
        foodDiv.className = "food";
        foodDiv.innerHTML = `<p class="food-cnt">${item.food.replace(/, /g, "<br><br>")}</p>`;

        const calDiv = document.createElement("div");
        calDiv.className = "calory";
        calDiv.innerHTML = `<p class="calory-cnt">${item.calory}</p>`;

        if (selectedMealType === 'dinner') {
            dayBox.classList.add('dinner-theme');
        }

        dayBox.innerHTML = `
            ${dateDiv.outerHTML}
            ${foodDiv.outerHTML}
            ${calDiv.outerHTML}
        `;
        
        let todayStr = new Date().toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" });
        if (item.date.startsWith(todayStr)) {
            dayBox.classList.add("today");
        }
        grid.appendChild(dayBox);
    }
    
    mainContainer.appendChild(grid);
    updateGridColumns();
}

function updateGridColumns() {
    const grid = document.querySelector('.meal-grid');
    if (grid) {
        if (window.innerWidth <= 1080) {
            grid.style.gridTemplateColumns = "repeat(1, auto)";
        } else {
            grid.style.gridTemplateColumns = "repeat(3, auto)";
        }
    }
}

mealToggle.addEventListener("change", renderGrid);
citySelection.addEventListener("change", renderGrid);
window.addEventListener('resize', updateGridColumns);
document.addEventListener("DOMContentLoaded", renderGrid);
