// // // import { json } from "body-parser"

// // var data = {
// //     "results": [
// //         {
// //             "id": 8,
// //             "vendor_id": 17,
// //             "name": "Gold Rose",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-16T17:06:00.000Z",
// //             "updated_on": "2023-07-16T17:06:00.000Z",
// //             "product_verient_id": 14,
// //             "product_id": 8,
// //             "verient_name": "red roas",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 0,
// //             "price": 450,
// //             "mrp": 500,
// //             "gst": 10,
// //             "sgst": 5,
// //             "cgst": 5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 10,
// //             "verient_description": "test",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-16T18:15:52.000Z",
// //             "verient_updated_on": "2023-07-16T18:15:52.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://192.168.29.108:9999/product_images/cover_image_167575.png",
// //             "cover_image": null
// //         },
// //         {
// //             "id": 10,
// //             "vendor_id": 17,
// //             "name": "new roas",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-16T18:03:59.000Z",
// //             "updated_on": "2023-07-16T18:03:59.000Z",
// //             "product_verient_id": 15,
// //             "product_id": 10,
// //             "verient_name": "rose",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 1000,
// //             "price": 450,
// //             "mrp": 500,
// //             "gst": 10,
// //             "sgst": 5,
// //             "cgst": 5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 10,
// //             "verient_description": "test",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-16T18:18:39.000Z",
// //             "verient_updated_on": "2023-07-16T18:18:39.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://192.168.29.108:9999/product_images/cover_image_560832.png",
// //             "cover_image": null
// //         },
// //         {
// //             "id": 11,
// //             "vendor_id": 17,
// //             "name": "M rose",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-16T18:29:04.000Z",
// //             "updated_on": "2023-07-16T18:29:04.000Z",
// //             "product_verient_id": 16,
// //             "product_id": 11,
// //             "verient_name": "ok",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 1000,
// //             "price": 90,
// //             "mrp": 100,
// //             "gst": 10,
// //             "sgst": 5,
// //             "cgst": 5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 10,
// //             "verient_description": "test",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-16T18:29:53.000Z",
// //             "verient_updated_on": "2023-07-16T18:29:53.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://192.168.29.108:9999/product_images/cover_image_268453.png,http://192.168.29.108:9999/product_images/cover_image_333969.png,http://192.168.29.108:9999/product_images/cover_image_879206.png",
// //             "cover_image": null
// //         },
// //         {
// //             "id": 12,
// //             "vendor_id": 17,
// //             "name": "new vr",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-16T18:45:02.000Z",
// //             "updated_on": "2023-07-16T18:45:02.000Z",
// //             "product_verient_id": 17,
// //             "product_id": 12,
// //             "verient_name": "Test ",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 1000,
// //             "price": 450,
// //             "mrp": 500,
// //             "gst": 10,
// //             "sgst": 5,
// //             "cgst": 5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 10,
// //             "verient_description": "test",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-16T18:45:43.000Z",
// //             "verient_updated_on": "2023-07-16T18:45:43.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://192.168.29.108:9999/product_images/cover_image_432810.png",
// //             "cover_image": null
// //         },
// //         {
// //             "id": 13,
// //             "vendor_id": 17,
// //             "name": "Sun Flower",
// //             "seo_tag": "Sunflower ",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "The common sunflower (Helianthus annuus) is a large annual forb of the genus Helianthus. It is commonly grown as a crop for its edible oily seeds. Apart from cooking oil production, it is also used as livestock forage (as a meal or a silage plant), as bird food, in some industrial applications, and as an ornamental in domestic gardens. Wild H. annuus is a widely branched annual plant with many flower heads. The domestic sunflower, however, often possesses only a single large inflorescence (flower head) atop an unbranched stem.",
// //             "benefits": "THEY WERE BROUGHT TO RUSSIA BY ROYALTY.",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-16T18:55:39.000Z",
// //             "updated_on": "2023-07-16T18:55:39.000Z",
// //             "product_verient_id": 18,
// //             "product_id": 13,
// //             "verient_name": "Sun Flower ",
// //             "quantity": 10,
// //             "unit": "PCS",
// //             "product_stock_quantity": 1000,
// //             "price": 147,
// //             "mrp": 150,
// //             "gst": 3,
// //             "sgst": 1.5,
// //             "cgst": 1.5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 2,
// //             "verient_description": "THEY WERE BROUGHT TO RUSSIA BY ROYALTY.",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-16T18:56:10.000Z",
// //             "verient_updated_on": "2023-07-16T18:56:10.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://www.indiakinursery.com:9999/product_images/cover_image_830008.png,http://www.indiakinursery.com:9999/product_images/cover_image_240420.png,http://192.168.29.108:9999/product_images/_881805.png,http://192.168.29.108:9999/product_images/_516364.png",
// //             "cover_image": "http://www.indiakinursery.com:9999/product_images/cover_image_830008.png,http://192.168.29.108:9999/product_images/_516364.png"
// //         },
// //         {
// //             "id": 14,
// //             "vendor_id": 17,
// //             "name": "Test",
// //             "seo_tag": "T",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-16T20:37:06.000Z",
// //             "updated_on": "2023-07-16T20:37:06.000Z",
// //             "product_verient_id": 19,
// //             "product_id": 14,
// //             "verient_name": "yy",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 1000,
// //             "price": 900,
// //             "mrp": 1000,
// //             "gst": 10,
// //             "sgst": 5,
// //             "cgst": 5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 10,
// //             "verient_description": "test",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-16T20:37:38.000Z",
// //             "verient_updated_on": "2023-07-16T20:37:38.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://192.168.29.108:9999/product_images/cover_image_453647.png",
// //             "cover_image": "http://192.168.29.108:9999/product_images/cover_image_453647.png"
// //         },
// //         {
// //             "id": 15,
// //             "vendor_id": 17,
// //             "name": "test 2",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-16T20:42:10.000Z",
// //             "updated_on": "2023-07-16T20:42:10.000Z",
// //             "product_verient_id": 20,
// //             "product_id": 15,
// //             "verient_name": "test",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 998,
// //             "price": 99,
// //             "mrp": 100,
// //             "gst": 1,
// //             "sgst": 0.5,
// //             "cgst": 0.5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 1,
// //             "verient_description": "1",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-16T20:42:51.000Z",
// //             "verient_updated_on": "2023-07-16T20:42:51.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://192.168.29.108:9999/product_images/cover_image_194738.png",
// //             "cover_image": null
// //         },
// //         {
// //             "id": 16,
// //             "vendor_id": 17,
// //             "name": "t3",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-16T20:45:38.000Z",
// //             "updated_on": "2023-07-16T20:45:38.000Z",
// //             "product_verient_id": 22,
// //             "product_id": 16,
// //             "verient_name": "t555",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 997,
// //             "price": 90,
// //             "mrp": 100,
// //             "gst": 10,
// //             "sgst": 5,
// //             "cgst": 5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 10,
// //             "verient_description": "10",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-16T21:03:11.000Z",
// //             "verient_updated_on": "2023-07-16T21:03:11.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://192.168.29.108:9999/product_images/cover_image_362396.png",
// //             "cover_image": null
// //         },
// //         {
// //             "id": 16,
// //             "vendor_id": 17,
// //             "name": "t3",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-16T20:45:38.000Z",
// //             "updated_on": "2023-07-16T20:45:38.000Z",
// //             "product_verient_id": 21,
// //             "product_id": 16,
// //             "verient_name": "r4",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 999,
// //             "price": 990,
// //             "mrp": 1000,
// //             "gst": 1,
// //             "sgst": 0.5,
// //             "cgst": 0.5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 1,
// //             "verient_description": "11",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-16T20:46:04.000Z",
// //             "verient_updated_on": "2023-07-16T20:46:04.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://www.indiakinursery.com:9999undefined.png,http://192.168.29.108:9999/product_images/cover_image_495265.png,http://www.indiakinursery.com:9999undefined.png",
// //             "cover_image": "http://www.indiakinursery.com:9999undefined.png,http://192.168.29.108:9999/product_images/cover_image_495265.png,http://www.indiakinursery.com:9999undefined.png"
// //         },
// //         {
// //             "id": 19,
// //             "vendor_id": 17,
// //             "name": "test",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "test data",
// //             "benefits": "test data",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-18T00:39:30.000Z",
// //             "updated_on": "2023-07-18T00:39:30.000Z",
// //             "product_verient_id": null,
// //             "product_id": null,
// //             "verient_name": null,
// //             "quantity": null,
// //             "unit": null,
// //             "product_stock_quantity": null,
// //             "price": null,
// //             "mrp": null,
// //             "gst": null,
// //             "sgst": null,
// //             "cgst": null,
// //             "verient_is_deleted": null,
// //             "verient_status": null,
// //             "discount": null,
// //             "verient_description": null,
// //             "verient_is_active": null,
// //             "verient_created_on": null,
// //             "verient_updated_on": null,
// //             "product_height": null,
// //             "product_width": null,
// //             "product_Weight": null,
// //             "all_images_url": null,
// //             "cover_image": null
// //         },
// //         {
// //             "id": 20,
// //             "vendor_id": 17,
// //             "name": "roas",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,3",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-18T16:21:28.000Z",
// //             "updated_on": "2023-07-18T16:21:28.000Z",
// //             "product_verient_id": null,
// //             "product_id": null,
// //             "verient_name": null,
// //             "quantity": null,
// //             "unit": null,
// //             "product_stock_quantity": null,
// //             "price": null,
// //             "mrp": null,
// //             "gst": null,
// //             "sgst": null,
// //             "cgst": null,
// //             "verient_is_deleted": null,
// //             "verient_status": null,
// //             "discount": null,
// //             "verient_description": null,
// //             "verient_is_active": null,
// //             "verient_created_on": null,
// //             "verient_updated_on": null,
// //             "product_height": null,
// //             "product_width": null,
// //             "product_Weight": null,
// //             "all_images_url": null,
// //             "cover_image": null
// //         },
// //         {
// //             "id": 21,
// //             "vendor_id": 17,
// //             "name": "test",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,4",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-18T16:22:50.000Z",
// //             "updated_on": "2023-07-18T16:22:50.000Z",
// //             "product_verient_id": null,
// //             "product_id": null,
// //             "verient_name": null,
// //             "quantity": null,
// //             "unit": null,
// //             "product_stock_quantity": null,
// //             "price": null,
// //             "mrp": null,
// //             "gst": null,
// //             "sgst": null,
// //             "cgst": null,
// //             "verient_is_deleted": null,
// //             "verient_status": null,
// //             "discount": null,
// //             "verient_description": null,
// //             "verient_is_active": null,
// //             "verient_created_on": null,
// //             "verient_updated_on": null,
// //             "product_height": null,
// //             "product_width": null,
// //             "product_Weight": null,
// //             "all_images_url": null,
// //             "cover_image": null
// //         },
// //         {
// //             "id": 22,
// //             "vendor_id": 17,
// //             "name": "Z+",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,4",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-18T16:26:03.000Z",
// //             "updated_on": "2023-07-18T16:26:03.000Z",
// //             "product_verient_id": 30,
// //             "product_id": 22,
// //             "verient_name": "z2",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 10,
// //             "price": 99,
// //             "mrp": 100,
// //             "gst": 1,
// //             "sgst": 0.5,
// //             "cgst": 0.5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 1,
// //             "verient_description": "10",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-18T16:38:58.000Z",
// //             "verient_updated_on": "2023-07-18T16:38:58.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://192.168.29.108:9999/product_images/cover_image_497284.png",
// //             "cover_image": null
// //         },
// //         {
// //             "id": 22,
// //             "vendor_id": 17,
// //             "name": "Z+",
// //             "seo_tag": "",
// //             "brand": null,
// //             "category": "1,4",
// //             "is_deleted": 0,
// //             "status": "active",
// //             "review": null,
// //             "rating": null,
// //             "description": "undefined",
// //             "care_and_Instructions": "",
// //             "benefits": "",
// //             "is_active": 1,
// //             "created_by": "undefined",
// //             "created_by_id": "17",
// //             "created_on": "2023-07-18T16:26:03.000Z",
// //             "updated_on": "2023-07-18T16:26:03.000Z",
// //             "product_verient_id": 29,
// //             "product_id": 22,
// //             "verient_name": "Z1",
// //             "quantity": 1,
// //             "unit": "PCS",
// //             "product_stock_quantity": 0,
// //             "price": 900,
// //             "mrp": 1000,
// //             "gst": 10,
// //             "sgst": 5,
// //             "cgst": 5,
// //             "verient_is_deleted": 0,
// //             "verient_status": "active",
// //             "discount": 10,
// //             "verient_description": "test",
// //             "verient_is_active": 1,
// //             "verient_created_on": "2023-07-18T16:38:10.000Z",
// //             "verient_updated_on": "2023-07-18T16:38:10.000Z",
// //             "product_height": "undefined",
// //             "product_width": "undefined",
// //             "product_Weight": "undefined",
// //             "all_images_url": "http://192.168.29.108:9999/product_images/cover_image_526413.png",
// //             "cover_image": null
// //         }
// //     ],
// //     "pagination": {
// //         "current": 0,
// //         "perPage": "100"
// //     }

// // }


// // var formate_data = [];
// // var data1 = JSON.parse(JSON.stringify(data.results));
// // var product_chk_ar = [];

// // data1.forEach((item, index) => {
// //     var product_id = item["product_id"];

// //     if (product_chk_ar.includes(product_id)) {
// //         // Find the product in formate_data and push the verient into its "verients" array
// //         var product = formate_data.find(obj => obj.id == product_id);
// //         product.verients.push({ item });
// //     } else {
// //         product_chk_ar.push(product_id);
// //         var product = {
// //             id: product_id,
// //             name: item.name,
// //             seo_tag: item.seo_tag, brand: item.brand, category: item.category, is_deleted: item.is_deleted, status: item.status, review: item.review, rating: item.rating, description: item.description, care_and_Instructions: item.care_and_Instructions, benefits: item.benefits, is_active: item.is_active, created_by: item.created_by, created_by_id: item.created_by_id, created_on: item.created_on, updated_on: item.updated_on,
// //             verients: [{ item }]
// //         };
// //         formate_data.push(product);
// //     }
// //     if (data1.length - 1 == index) { console.log(formate_data) }
// // });

// // // SELECT GROUP_CONCAT(product_verient.product_verient_id) AS verients_id, id, product.vendor_id AS vendor_id, name, seo_tag, brand, category, is_deleted, status, review, rating, description, care_and_Instructions, benefits, is_active, created_by, created_by_id, created_on, updated_on, product_verient_id, product_id, verient_name, quantity, unit, product_stock_quantity, price, mrp, gst, sgst, cgst, verient_is_deleted, verient_status, discount, verient_description, verient_is_active, verient_created_on, verient_updated_on, product_height, product_width, product_Weight, (SELECT GROUP_CONCAT(product_image_path) FROM product_images WHERE product_images.product_verient_id = product_verient.product_verient_id) AS all_images_url, (SELECT GROUP_CONCAT(product_image_path) FROM product_images WHERE product_images.product_verient_id = product_verient.product_verient_id AND image_position = "cover" group by product_images.product_verient_id) AS cover_image FROM product left join product_verient ON product.id = product_verient.product_id where product.vendor_id = "17" AND(product_verient.verient_is_deleted IS NULL OR product_verient.verient_is_deleted = 0) AND is_deleted = 0   LIMIT 0, 100

// SELECT * FROM product_view where  verient_is_deleted = "0" ORDER BY id DESC
// SELECT COUNT(`order`.product_id) AS sale_count From order WHERE product_id =
//     SELECT COUNT(`order`.product_id) AS sale_count, `order`.product_id, `order`.created_on, `product_view`.`id`, `product_view`.`vendor_id`, `product_view`.`name`, `product_view`.`seo_tag`, `product_view`.`brand`, `product_view`.`category`, `product_view`.`is_deleted`, `product_view`.`status`, `product_view`.`review`, `product_view`.`rating`, `product_view`.`description`, `product_view`.`is_active`, `product_view`.`created_by`, `product_view`.`created_by_id`, `product_view`.`created_on`, `product_view`.`updated_on`, `product_view`.`product_verient_id`, `product_view`.`product_id`, `product_view`.`verient_name`, `product_view`.`quantity`, `product_view`.`unit`, `product_view`.`product_stock_quantity`, `product_view`.`price`, `product_view`.`mrp`, `product_view`.`gst`, `product_view`.`sgst`, `product_view`.`cgst`, `product_view`.`verient_is_deleted`, `product_view`.`verient_status`, `product_view`.`discount`, `product_view`.`verient_description`, `product_view`.`verient_is_active`, `product_view`.`verient_created_on`, `product_view`.`verient_updated_on`, `product_view`.`product_height`, `product_view`.`product_width`, `product_view`.`product_Weight`, `product_view`.`cover_image`, `product_view`.`all_images_url`, `product_view`.`avgRatings`, (SELECT cart_product_quantity FROM cart WHERE cart.product_verient_id = product_view.product_verient_id AND user_id = "37") AS cart_count  FROM `order` LEFT JOIN `product_view` ON`order`.product_id = `product_view`.product_id WHERE`order`.created_on BETWEEN '2023-06-20 09:17:06' AND '2023-07-20 09:17:06' GROUP BY`order`.product_id ORDER BY sale_count DESC

// SELECT *, (SELECT COUNT(`order`.product_id) AS sale_count From `order` WHERE product_view.product_id = `order`.product_id) FROM`product_view`;

// var today = new Date();
// var sevenDaysAgo = new Date(today);
// to_date = today.toISOString().slice(0, 19).replace("T", " ");
// sevenDaysAgo.setDate(today.getDate() - 30);
// from_date = sevenDaysAgo.toISOString().slice(0, 19).replace("T", " ");
// query_ += "`order`.created_on BETWEEN '" + from_date + "' AND '" + to_date + "'"

// "SELECT *,(SELECT COUNT(`order`.product_id) AS sale_count From `order` WHERE product_view.product_id=`order`.product_id AND `order`.created_on BETWEEN '2023-06-20 11:34:05' AND '2023-07-20 11:34:05') FROM `product_view`"

// "SELECT *,(SELECT COUNT(`order`.product_id) AS sale_count From `order` WHERE product_view.product_id=`order`.product_id AND `order`.created_on BETWEEN '" + from_date + "' AND '" + to_date + "') FROM `product_view`"

// SELECT *, (SELECT COUNT(`order`.product_id) AS is_trending From `order` WHERE product_view.product_id = `order`.product_id AND`order`.created_on BETWEEN '" + from_date + "' AND '" + to_date + "')> 10 AS is_trending FROM`product_view`;

// SELECT *,(SELECT COUNT(`order`.product_id) AS count_order From `order` WHERE product_view.product_id=`order`.product_id AND `order`.created_on BETWEEN '2023-06-20 11:34:05' AND '2023-07-20 11:34:05' AND count_order > 10) AS order_count FROM `product_view`;



// SELECT *,(SELECT IF(COUNT(`order`.product_id)>10,COUNT(`order`.product_id),NULL) From `order` WHERE product_view.product_id=`order`.product_id AND (`order`.created_on BETWEEN '2023-06-20 11:34:05' AND '2023-07-20 11:34:05')) AS order_count FROM `product_view`;