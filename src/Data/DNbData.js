const dnbdata = [
    {
        img:"https://m.media-amazon.com/images/I/41Px-oDbpKL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"FACES CANADA Ultime Pro HD Intense Matte Lipstick +",
        link:"https://www.amazon.in/Facescanada-Ultime-Intense-Primer-Magnetic/dp/B07J1X1JRB?crid=MFJMFL5US0O3&dib=eyJ2IjoiMSJ9.vWtWRYMsL6F-HB9OXWyuQ4WbKhLXdI6dvZdDldmiBRbVhsdSxnNr1s9QGvvq2tRQc41nBwWg5uCR31E7qUZzZSA3rX_UZBshXhy49_wTklSwQq9NsNUixvayPue_kFwBhfPSI1_ktYnbTEJxyh2X-lYXEqGfcVHlQ-IGG8YUOumYNpZ6XXS2quNHgNVy2V9BOlikd5y6hunzAEIYpaRiUAn89TbhzLQX1uK_0lXzaVVq8AMjpvbcc7HnKdYwfWnwoV3lrp3jGi8vILG7J-c4v37zOuyOsbfkwtJa79BlYY.J5p7K3dopk5yuj1owWf9nXIq6VCfTRt7sWddQRjYv20&dib_tag=se&keywords=date+night+beauty&qid=1720204208&s=apparel&sprefix=date+night+beauty%2Capparel%2C299&sr=1-9&linkCode=ll1&tag=sahil02424-21&linkId=7e23a808324fba49ee99b339f506872c&language=en_IN&ref=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/41HykZea31L._SX300_SY300_QL70_FMwebp_.jpg",
        name:"SUGAR Cosmetics Smudge Me Not Liquid Lipsticks for Women ",
        link:"https://www.amazon.in/SUGAR-Cosmetics-Lipstick-Aubergine-Blackened/dp/B079TK5BYB?crid=MFJMFL5US0O3&dib=eyJ2IjoiMSJ9.vWtWRYMsL6F-HB9OXWyuQ4WbKhLXdI6dvZdDldmiBRbVhsdSxnNr1s9QGvvq2tRQc41nBwWg5uCR31E7qUZzZSA3rX_UZBshXhy49_wTklSwQq9NsNUixvayPue_kFwBhfPSI1_ktYnbTEJxyh2X-lYXEqGfcVHlQ-IGG8YUOumYNpZ6XXS2quNHgNVy2V9BOlikd5y6hunzAEIYpaRiUAn89TbhzLQX1uK_0lXzaVVq8AMjpvbcc7HnKdYwfWnwoV3lrp3jGi8vILG7J-c4v37zOuyOsbfkwtJa79BlYY.J5p7K3dopk5yuj1owWf9nXIq6VCfTRt7sWddQRjYv20&dib_tag=se&keywords=date+night+beauty&qid=1720204208&s=apparel&sprefix=date+night+beauty%2Capparel%2C299&sr=1-22&linkCode=ll1&tag=sahil02424-21&linkId=88e2e059a23c35b8a375f3682934605d&language=en_IN&ref=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/31Nkx1IJsoL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"SUGAR Cosmetics Nothing Else Matter Longwear Lipstick for Women ",
        link:"https://www.amazon.in/SUGAR-Cosmetics-Nothing-Longwear-Lipstick/dp/B07VX6RPQV?crid=MFJMFL5US0O3&dib=eyJ2IjoiMSJ9.vWtWRYMsL6F-HB9OXWyuQ4WbKhLXdI6dvZdDldmiBRbVhsdSxnNr1s9QGvvq2tRQc41nBwWg5uCR31E7qUZzZSA3rX_UZBshXhy49_wTklSwQq9NsNUixvayPue_kFwBhfPSI1_ktYnbTEJxyh2X-lYXEqGfcVHlQ-IGG8YUOumYNpZ6XXS2quNHgNVy2V9BOlikd5y6hunzAEIYpaRiUAn89TbhzLQX1uK_0lXzaVVq8AMjpvbcc7HnKdYwfWnwoV3lrp3jGi8vILG7J-c4v37zOuyOsbfkwtJa79BlYY.J5p7K3dopk5yuj1owWf9nXIq6VCfTRt7sWddQRjYv20&dib_tag=se&keywords=date+night+beauty&qid=1720204208&s=apparel&sprefix=date+night+beauty%2Capparel%2C299&sr=1-19&linkCode=ll1&tag=sahil02424-21&linkId=786bd6abc206f5ceee9794ccde67f342&language=en_IN&ref=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/31FSHDorqwL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"MyGlamm Manish Malhotra Hi-Shine Lipstick - Rose Romance - 4gm",
        link:"https://www.amazon.in/MyGlamm-Malhotra-Hi-Shine-Lipstick-Romance/dp/B085YBJD5C?crid=MFJMFL5US0O3&dib=eyJ2IjoiMSJ9.vWtWRYMsL6F-HB9OXWyuQ4WbKhLXdI6dvZdDldmiBRbVhsdSxnNr1s9QGvvq2tRQc41nBwWg5uCR31E7qUZzZSA3rX_UZBshXhy49_wTklSwQq9NsNUixvayPue_kFwBhfPSI1_ktYnbTEJxyh2X-lYXEqGfcVHlQ-IGG8YUOumYNpZ6XXS2quNHgNVy2V9BOlikd5y6hunzAEIYpaRiUAn89TbhzLQX1uK_0lXzaVVq8AMjpvbcc7HnKdYwfWnwoV3lrp3jGi8vILG7J-c4v37zOuyOsbfkwtJa79BlYY.J5p7K3dopk5yuj1owWf9nXIq6VCfTRt7sWddQRjYv20&dib_tag=se&keywords=date+night+beauty&qid=1720204208&s=apparel&sprefix=date+night+beauty%2Capparel%2C299&sr=1-12&linkCode=ll1&tag=sahil02424-21&linkId=c0aea348a0340cf4e8ae8affa621dcd3&language=en_IN&ref=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/41aD7RXPOtL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"SKINN BY TITAN Celeste Long Lasting Everyday Eau De Parfum Spray For Women - 20 Ml ",
        link:"https://www.amazon.in/Skinn-Celeste-Fragrance-Women-20ml/dp/B074QRH882?crid=MFJMFL5US0O3&dib=eyJ2IjoiMSJ9.vWtWRYMsL6F-HB9OXWyuQ4WbKhLXdI6dvZdDldmiBRbVhsdSxnNr1s9QGvvq2tRQc41nBwWg5uCR31E7qUZzZSA3rX_UZBshXhy49_wTklSwQq9NsNUixvayPue_kFwBhfPSI1_ktYnbTEJxyh2X-lYXEqGfcVHlQ-IGG8YUOumYNpZ6XXS2quNHgNVy2V9BOlikd5y6hunzAEIYpaRiUAn89TbhzLQX1uK_0lXzaVVq8AMjpvbcc7HnKdYwfWnwoV3lrp3jGi8vILG7J-c4v37zOuyOsbfkwtJa79BlYY.J5p7K3dopk5yuj1owWf9nXIq6VCfTRt7sWddQRjYv20&dib_tag=se&keywords=date+night+beauty&qid=1720204208&s=apparel&sprefix=date+night+beauty%2Capparel%2C299&sr=1-6&linkCode=ll1&tag=sahil02424-21&linkId=0d0b1fd63f5ff939a58d3e6c8d76ba97&language=en_IN&ref=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/31SPDxFsZFL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Bella Vita Luxury Woman Eau De Parfum Gift Set 4x20 ml for Women",
        link:"https://www.amazon.in/Bella-Vita-Organic-Perfumes-Fragrance/dp/B09232XNTX?crid=MFJMFL5US0O3&dib=eyJ2IjoiMSJ9.vWtWRYMsL6F-HB9OXWyuQ4WbKhLXdI6dvZdDldmiBRbVhsdSxnNr1s9QGvvq2tRQc41nBwWg5uCR31E7qUZzZSA3rX_UZBshXhy49_wTklSwQq9NsNUixvayPue_kFwBhfPSI1_ktYnbTEJxyh2X-lYXEqGfcVHlQ-IGG8YUOumYNpZ6XXS2quNHgNVy2V9BOlikd5y6hunzAEIYpaRiUAn89TbhzLQX1uK_0lXzaVVq8AMjpvbcc7HnKdYwfWnwoV3lrp3jGi8vILG7J-c4v37zOuyOsbfkwtJa79BlYY.J5p7K3dopk5yuj1owWf9nXIq6VCfTRt7sWddQRjYv20&dib_tag=se&keywords=date%2Bnight%2Bbeauty&qid=1720204208&s=apparel&sprefix=date%2Bnight%2Bbeauty%2Capparel%2C299&sr=1-3&th=1&linkCode=ll1&tag=sahil02424-21&linkId=ae9eab0d8d5cb0589baa55b1d35eb061&language=en_IN&ref=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/31ZBXvW-hlL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"CHAMBOR Matte Riot # 204 - Date Night, Date Night, 4.5 g",
        link:"https://www.amazon.in/CHAMBOR-Matte-Riot-204-Night/dp/B08LTMHTN7?crid=MFJMFL5US0O3&dib=eyJ2IjoiMSJ9.vWtWRYMsL6F-HB9OXWyuQ4WbKhLXdI6dvZdDldmiBRbVhsdSxnNr1s9QGvvq2tRQc41nBwWg5uCR31E7qUZzZSA3rX_UZBshXhy49_wTklSwQq9NsNUixvayPue_kFwBhfPSI1_ktYnbTEJxyh2X-lYXEqGfcVHlQ-IGG8YUOumYNpZ6XXS2quNHgNVy2V9BOlikd5y6hunzAEIYpaRiUAn89TbhzLQX1uK_0lXzaVVq8AMjpvbcc7HnKdYwfWnwoV3lrp3jGi8vILG7J-c4v37zOuyOsbfkwtJa79BlYY.J5p7K3dopk5yuj1owWf9nXIq6VCfTRt7sWddQRjYv20&dib_tag=se&keywords=date+night+beauty&qid=1720204208&s=apparel&sprefix=date+night+beauty%2Capparel%2C299&sr=1-2&linkCode=ll1&tag=sahil02424-21&linkId=073d389ceaefcacb1d352eb89306116b&language=en_IN&ref=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/41pV0iI9qSL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"FACES CANADA Ultime Pro Matte Lip Crayon - Date Night (Purple)",
        link:"https://www.amazon.in/Facescanada-Ultime-Matte-Crayon-Night/dp/B07J1WVKFK?crid=MFJMFL5US0O3&dib=eyJ2IjoiMSJ9.vWtWRYMsL6F-HB9OXWyuQ4WbKhLXdI6dvZdDldmiBRbVhsdSxnNr1s9QGvvq2tRQc41nBwWg5uCR31E7qUZzZSA3rX_UZBshXhy49_wTklSwQq9NsNUixvayPue_kFwBhfPSI1_ktYnbTEJxyh2X-lYXEqGfcVHlQ-IGG8YUOumYNpZ6XXS2quNHgNVy2V9BOlikd5y6hunzAEIYpaRiUAn89TbhzLQX1uK_0lXzaVVq8AMjpvbcc7HnKdYwfWnwoV3lrp3jGi8vILG7J-c4v37zOuyOsbfkwtJa79BlYY.J5p7K3dopk5yuj1owWf9nXIq6VCfTRt7sWddQRjYv20&dib_tag=se&keywords=date%2Bnight%2Bbeauty&qid=1720204208&s=apparel&sprefix=date%2Bnight%2Bbeauty%2Capparel%2C299&sr=1-1&th=1&linkCode=ll1&tag=sahil02424-21&linkId=4dedb93878c0fee691d53ac92733e481&language=en_IN&ref=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/61csWMhXsHL._SX522_.jpg",
        name:"FACES CANADA Ultime Pro Matte Lip Crayon - Date Night (Purple)",
        link:"https://www.amazon.in/Specially-Designed-Finished-Unbreakable-application/dp/B0BT1CRGMT?content-id=amzn1.sym.a2bbbb64-48b4-4667-bc8e-161434209626%3Aamzn1.sym.a2bbbb64-48b4-4667-bc8e-161434209626&crid=7UAZRHB2H4U5&cv_ct_cx=nails&dib=eyJ2IjoiMSJ9.hmYvQEcH8IaxiRUqSuPfLA.N6UeelwUeGYfkCfWWdWPMIgg5BB-SeHTIZ7Jm1A_AM8&dib_tag=se&keywords=nails&pd_rd_i=B0BT1CRGMT&pd_rd_r=78eb0cac-609d-45be-aefa-4ca2cd9166a9&pd_rd_w=55MR0&pd_rd_wg=mt8TH&pf_rd_p=a2bbbb64-48b4-4667-bc8e-161434209626&pf_rd_r=4C97J2CGBYF369JXB7NK&qid=1720264738&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=nails%2Caps%2C328&sr=1-1-b76bd6d9-c111-4fc7-b5ef-aec7efc3d41e&linkCode=ll1&tag=sahil02424-21&linkId=58d63714ead429abfc40751702240707&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/61C0bOlpJdL._SX522_PIbundle-24,TopRight,0,0_AA522SH20_.jpg",
        name:"&BEAUTY Artificial Nails | Stick On nails | 24 Reusable stick-on nails ",
        link:"https://www.amazon.in/BEAUTY-Artificial-Comfortable-hassle-free-application/dp/B0D7QDFW85?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-58-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&psc=1&linkCode=ll1&tag=sahil02424-21&linkId=092e8d28d5e4ca21294a05269d218933&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/71aevEPz0vL._SX522_PIbundle-500,TopRight,0,0_AA522SH20_.jpg",
        name:"ELECTOMANIA 500Pcs Fake Nails, 10 Sizes Artificial Nails",
        link:"https://www.amazon.in/ELECTOMANIA-Artificial-Transparent-Acrylic-Trapezoid/dp/B09F6MW7HR?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-51&th=1&linkCode=ll1&tag=sahil02424-21&linkId=2446c9cf1503eb65b31c291bc15b911f&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/71tiXQBx1rL._SX522_PIbundle-12,TopRight,0,0_SX522SY518SH20_.jpg",
        name:"AMOK STORE fake nail with glue UV treated nail tip",
        link:"https://www.amazon.in/AMOK-STORE-treated-reusable-glossy/dp/B0B2X19P4W?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-43&th=1&linkCode=ll1&tag=sahil02424-21&linkId=eb12810c20fb93a0170764562b33c047&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/41BKEWMGCyL._SX300_SY300_QL70_FMwebp_.jpg",
        name:"Gloss & Go 24 Reusable Artificial Fake Nail Set",
        link:"https://www.amazon.in/Gloss-Go-Artificial-Lightweight-Festivals/dp/B0CZSBH2JT?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-38&linkCode=ll1&tag=sahil02424-21&linkId=6360ba5faa2fc284f06e3b498b313929&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/71IxwyRlpIL._SX522_.jpg",
        name:"Princess by RENEE Stick on Nails Rainbow Unicorn",
        link:"https://www.amazon.in/RENEE-Artificial-Pre-teens-Lightweight-Long-lasting/dp/B0BCF57MX6?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-34&linkCode=ll1&tag=sahil02424-21&linkId=f7c0ac34c0660e30f964251f7fec673d&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/610Vf7LpOYL._SX522_.jpg",
        name:"Synaty 24PCS Everlasting French Nails Artificial Nails Art Set (Medium Round)",
        link:"https://www.amazon.in/Synaty-Everlasting-French-Artificial-K39-Almond/dp/B08HNBNQFY?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-35&linkCode=ll1&tag=sahil02424-21&linkId=49f7ad7838ab6819e01183a07205d2d4&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/51XHmCE4YdL._SX522_.jpg",
        name:"Buddy Jelly Trends Premium Designer 24pcs Stick-on Nails set,",
        link:"https://www.amazon.in/Buddy-Jelly-Trends-application-Unbreakable/dp/B0CQPPRLZL?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-54&linkCode=ll1&tag=sahil02424-21&linkId=bc0c80aa664207d34de27c0d6d16af61&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/613C-4MzB7L._SX522_.jpg",
        name:"MAYCREATE® 12 Colors Press on Nails Sets, Short Amond Press on Nails,",
        link:"https://www.amazon.in/MAYCREATE%C2%AE-Colors-Acrylic-Almond-include/dp/B0CMD1Q2KC?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-53&th=1&linkCode=ll1&tag=sahil02424-21&linkId=b50fc5a78fc0c6e2a5ab27d27d3aacfc&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/613C-4MzB7L._SX522_.jpg",
        name:"MAYCREATE® 12 Colors Press on Nails Sets, Short Amond Press on Nails,",
        link:"https://www.amazon.in/MAYCREATE%C2%AE-Colors-Acrylic-Almond-include/dp/B0CMD1Q2KC?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-53&th=1&linkCode=ll1&tag=sahil02424-21&linkId=b50fc5a78fc0c6e2a5ab27d27d3aacfc&language=en_IN&ref_=as_li_ss_tl"
    },
    {
        img:"https://m.media-amazon.com/images/I/613C-4MzB7L._SX522_.jpg",
        name:"MAYCREATE® 12 Colors Press on Nails Sets, Short Amond Press on Nails,",
        link:"https://www.amazon.in/MAYCREATE%C2%AE-Colors-Acrylic-Almond-include/dp/B0CMD1Q2KC?crid=7UAZRHB2H4U5&dib=eyJ2IjoiMSJ9.1kaxiuQA6sG-tdGxynsiCJgbiSYZ74rOHVHCQamuGnpUSY9XoxD4wEk6oDeKngDkcqY30ozCxwcPMLtf1xLUOkvnQyBO8Cb4gFONPHcsk5AjQTowOJcLaqxZxDzE9-AtrdBQMZ1y7I1BAlIm5aI2v3fw6BGiiml050r1lPPnGvKKbWxK8ka6ERr4mjv8yFfn2_sWuwwPrnqK6y0hHrP3DfQPR1kxoDEsj0l9F2h-tTKil-fSwvGUmHGAbVVYoEXSKGtOnNyoIuucamUY2xf60qnT-PVnpzoMej8T_jyP-bA.ATfjXDJU30fsbHFa5f3ZX5hpo8E8cgVqNhxRB8x_tR8&dib_tag=se&keywords=nails&qid=1720264738&sprefix=nails%2Caps%2C328&sr=8-53&th=1&linkCode=ll1&tag=sahil02424-21&linkId=b50fc5a78fc0c6e2a5ab27d27d3aacfc&language=en_IN&ref_=as_li_ss_tl"
    },
]
export default dnbdata