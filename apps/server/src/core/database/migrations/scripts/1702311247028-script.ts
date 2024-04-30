import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('5125fdd2-ed44-4f48-a165-7e50701c1147', '1Alden53@hotmail.com', 'Carol Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2eb443c5-4741-449a-b07c-c83ccd6ba1e7', '7Daisha.Schowalter@yahoo.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=9', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('4154c7fb-ee3d-4dae-a5e0-ede120f6642f', '19Jamaal85@gmail.com', 'Diana Adams', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ecec516a-d958-41d7-82c6-ea0232ac56fa', '25Gerson.Runolfsdottir@hotmail.com', 'Bethany Jones', 'https://i.imgur.com/YfJQV5z.png?id=27', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('35a5d0c9-19f1-4155-8304-fa27f376607d', '31Hilbert64@hotmail.com', 'Bethany Jones', 'https://i.imgur.com/YfJQV5z.png?id=33', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('a946297e-a7d7-4952-9798-59bf84f5ee17', '37Joanie67@hotmail.com', 'Carol Brown', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('cf3d77da-74e2-494e-bfdb-2a1fd56b9dab', '43Davin_Hyatt@gmail.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=45', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('49448f2e-a26a-4f7f-bbe1-451d0e28da7c', '49Zola18@gmail.com', 'Diana Adams', 'https://i.imgur.com/YfJQV5z.png?id=51', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('fdbe8a33-f120-4ad4-bd8a-8562289826a1', '55Roderick.Carter@gmail.com', 'Ellen Clark', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('2f114a19-f906-4110-ab4e-4c95bfdddd69', 'New Connection', 'You are invited to join our upcoming webinar on AI.', 'Carol White', '64Jackson16@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '2eb443c5-4741-449a-b07c-c83ccd6ba1e7');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6a0495fd-850a-40da-a4b9-e77042e4fe9a', 'Mentorship Offer', 'A new job opportunity in your field has been posted.', 'Eva Green', '71Nikita88@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '5125fdd2-ed44-4f48-a165-7e50701c1147');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6faa0eaf-2dc9-46fc-b5d1-4b7367e70895', 'Mentorship Offer', 'A mentorship session has been scheduled for next week.', 'Alice Johnson', '78Aric.Mraz@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', 'cf3d77da-74e2-494e-bfdb-2a1fd56b9dab');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1c38c18b-9fe4-4f86-8e5c-385a2e9ed75a', 'Event Invitation', 'A mentorship session has been scheduled for next week.', 'David Brown', '85Syble_Hahn14@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '5125fdd2-ed44-4f48-a165-7e50701c1147');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e27dd0ca-c291-430c-aab5-7f188be75c01', 'New Connection', 'A mentorship session has been scheduled for next week.', 'Alice Johnson', '92Chesley.OHara@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '49448f2e-a26a-4f7f-bbe1-451d0e28da7c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f0ed0ec7-1a40-407f-aa77-21edadfe83f2', 'Profile Update', 'Your profile has been successfully updated.', 'Bob Smith', '99Mollie_Trantow76@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', 'ecec516a-d958-41d7-82c6-ea0232ac56fa');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('738f609c-6605-45e1-868c-349d551e02d0', 'Mentorship Offer', 'Your profile has been successfully updated.', 'Eva Green', '106Sid63@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', 'ecec516a-d958-41d7-82c6-ea0232ac56fa');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8cbb7d4e-91df-4d5b-a6c7-951cf90a7e99', 'Event Invitation', 'Your profile has been successfully updated.', 'Bob Smith', '113Johan.Kuhlman43@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', 'fdbe8a33-f120-4ad4-bd8a-8562289826a1');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('af617e1f-8818-41aa-9107-11ce025c5f49', 'New Connection', 'Your profile has been successfully updated.', 'Alice Johnson', '120Devonte_Pollich4@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '49448f2e-a26a-4f7f-bbe1-451d0e28da7c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('83838caf-9598-4c4d-b8a3-5eb8ff2d78e9', 'Profile Update', 'Your profile has been successfully updated.', 'David Brown', '127Ephraim36@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '2eb443c5-4741-449a-b07c-c83ccd6ba1e7');

INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('b86e07de-a7ab-42e9-91e8-66daf9992f98', 'Had a great time presenting at the tech conference today', 'https://i.imgur.com/YfJQV5z.png?id=132', 'cf3d77da-74e2-494e-bfdb-2a1fd56b9dab');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('ef9ad9df-e80b-4883-ad51-26fe8659f0ee', 'Looking for recommendations on the best coding bootcamps.', 'https://i.imgur.com/YfJQV5z.png?id=135', 'cf3d77da-74e2-494e-bfdb-2a1fd56b9dab');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('35c7f462-b400-4f8e-9380-ad09beb2dd18', 'Had a great time presenting at the tech conference today', 'https://i.imgur.com/YfJQV5z.png?id=138', '2eb443c5-4741-449a-b07c-c83ccd6ba1e7');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('1dbb1c89-22e7-4d2d-a6ec-e11d0a862cd7', 'Thrilled to announce Ive been promoted to Senior Data Scientist', 'https://i.imgur.com/YfJQV5z.png?id=141', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('fa86d77b-924e-45b1-bfde-43eb8783895c', 'Looking for recommendations on the best coding bootcamps.', 'https://i.imgur.com/YfJQV5z.png?id=144', 'fdbe8a33-f120-4ad4-bd8a-8562289826a1');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('ec2cbc02-9463-4094-acb4-8576929b657d', 'Looking for recommendations on the best coding bootcamps.', 'https://i.imgur.com/YfJQV5z.png?id=147', 'cf3d77da-74e2-494e-bfdb-2a1fd56b9dab');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('8411a98b-6557-4853-8ead-4e2e1ff57829', 'Just published a paper on AI applications in healthcare. Check it out', 'https://i.imgur.com/YfJQV5z.png?id=150', '5125fdd2-ed44-4f48-a165-7e50701c1147');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('1517380f-295f-4cb7-9f5a-e810948bab24', 'Thrilled to announce Ive been promoted to Senior Data Scientist', 'https://i.imgur.com/YfJQV5z.png?id=153', 'ecec516a-d958-41d7-82c6-ea0232ac56fa');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('434d1e7b-6b3f-4f89-968d-78a7b547f33a', 'Thrilled to announce Ive been promoted to Senior Data Scientist', 'https://i.imgur.com/YfJQV5z.png?id=156', '4154c7fb-ee3d-4dae-a5e0-ede120f6642f');
INSERT INTO "post_data" ("id", "content", "imageUrl", "userId") VALUES ('c0038a66-eac7-45ab-a471-7b0fc9bdaca8', 'Thrilled to announce Ive been promoted to Senior Data Scientist', 'https://i.imgur.com/YfJQV5z.png?id=159', '49448f2e-a26a-4f7f-bbe1-451d0e28da7c');

INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('d1bff8dc-ae5a-4bdc-b17d-6be501bab333', 'Really insightful post thanks for sharing', '35a5d0c9-19f1-4155-8304-fa27f376607d', '1517380f-295f-4cb7-9f5a-e810948bab24');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('09542618-211a-4bd2-b653-10926ed36cfb', 'Loved your latest project update very inspiring', '5125fdd2-ed44-4f48-a165-7e50701c1147', 'ec2cbc02-9463-4094-acb4-8576929b657d');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('bd981887-ba81-49dd-a45b-6909b2ae9967', 'Congratulations on your new position', 'cf3d77da-74e2-494e-bfdb-2a1fd56b9dab', 'ef9ad9df-e80b-4883-ad51-26fe8659f0ee');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('de446210-ee64-4f48-b856-9575890bccb2', 'Congratulations on your new position', '49448f2e-a26a-4f7f-bbe1-451d0e28da7c', '1517380f-295f-4cb7-9f5a-e810948bab24');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('2e35f0e3-2577-4c9d-a266-2fef7446ec20', 'This is a great tip Ill definitely try it out.', 'fdbe8a33-f120-4ad4-bd8a-8562289826a1', 'ec2cbc02-9463-4094-acb4-8576929b657d');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('d9d32e5b-9482-48b0-b2b5-314b9d938a1d', 'Loved your latest project update very inspiring', '35a5d0c9-19f1-4155-8304-fa27f376607d', 'ef9ad9df-e80b-4883-ad51-26fe8659f0ee');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('dc94181b-1cfd-4145-8d3d-4e6d27b0e958', 'Really insightful post thanks for sharing', 'a946297e-a7d7-4952-9798-59bf84f5ee17', '434d1e7b-6b3f-4f89-968d-78a7b547f33a');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('588f61ca-a5f7-480e-b31f-3b3916068a53', 'Cant wait to see more of your work', '5125fdd2-ed44-4f48-a165-7e50701c1147', '1517380f-295f-4cb7-9f5a-e810948bab24');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('e39c2cf6-c2c8-422b-9d63-7c84aa4989c2', 'Really insightful post thanks for sharing', '49448f2e-a26a-4f7f-bbe1-451d0e28da7c', '434d1e7b-6b3f-4f89-968d-78a7b547f33a');
INSERT INTO "comment" ("id", "content", "userId", "postId") VALUES ('1cae1cb0-abf6-46b8-a724-00511522c150', 'Congratulations on your new position', '49448f2e-a26a-4f7f-bbe1-451d0e28da7c', 'ef9ad9df-e80b-4883-ad51-26fe8659f0ee');

INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('bbc060d4-0b85-418d-b7aa-d91f93a30338', '35a5d0c9-19f1-4155-8304-fa27f376607d', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('ecb9f247-08f5-4fbf-ac88-9df941eb0dde', '35a5d0c9-19f1-4155-8304-fa27f376607d', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('368fcafd-4627-40f3-8452-8eb833559e38', '2eb443c5-4741-449a-b07c-c83ccd6ba1e7', '49448f2e-a26a-4f7f-bbe1-451d0e28da7c');
INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('b907eddd-bbd1-4658-b71e-8d6f10f816ac', 'fdbe8a33-f120-4ad4-bd8a-8562289826a1', 'fdbe8a33-f120-4ad4-bd8a-8562289826a1');
INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('b3aff50c-a19c-4802-b4df-047289b9b7de', 'fdbe8a33-f120-4ad4-bd8a-8562289826a1', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('f8dc4d65-2cec-4304-a9d2-22887897aa88', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('fabaf9dd-f821-41c3-b257-214877af9481', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'cf3d77da-74e2-494e-bfdb-2a1fd56b9dab');
INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('0f4b18c7-e6d7-4d80-9da2-9e0692dd16ab', 'fdbe8a33-f120-4ad4-bd8a-8562289826a1', '5125fdd2-ed44-4f48-a165-7e50701c1147');
INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('b2df4961-9dec-454e-bb8c-491418cf9791', '49448f2e-a26a-4f7f-bbe1-451d0e28da7c', '4154c7fb-ee3d-4dae-a5e0-ede120f6642f');
INSERT INTO "connection" ("id", "userId1Id", "userId2Id") VALUES ('7f2a3086-e85c-4bd3-8974-18e7247bcf3a', '35a5d0c9-19f1-4155-8304-fa27f376607d', '2eb443c5-4741-449a-b07c-c83ccd6ba1e7');

INSERT INTO "search" ("id", "keyword", "userId") VALUES ('58a3c029-8f14-4da3-994b-c3a59df3efc8', 'biotechnology', '2eb443c5-4741-449a-b07c-c83ccd6ba1e7');
INSERT INTO "search" ("id", "keyword", "userId") VALUES ('7a66f773-5f2e-483c-96dc-97ba155f7900', 'data science', 'fdbe8a33-f120-4ad4-bd8a-8562289826a1');
INSERT INTO "search" ("id", "keyword", "userId") VALUES ('5247a1e8-e335-4b1b-ad45-aa66b75f759c', 'biotechnology', 'a946297e-a7d7-4952-9798-59bf84f5ee17');
INSERT INTO "search" ("id", "keyword", "userId") VALUES ('237dc4ca-894b-43b7-bf90-ac11ff665970', 'machine learning', '2eb443c5-4741-449a-b07c-c83ccd6ba1e7');
INSERT INTO "search" ("id", "keyword", "userId") VALUES ('ed269f8e-1e88-46da-94d2-ca512eea422d', 'biotechnology', '49448f2e-a26a-4f7f-bbe1-451d0e28da7c');
INSERT INTO "search" ("id", "keyword", "userId") VALUES ('0ffe3178-123c-4b39-94fa-66356f044abd', 'biotechnology', '5125fdd2-ed44-4f48-a165-7e50701c1147');
INSERT INTO "search" ("id", "keyword", "userId") VALUES ('8dbd6368-9772-489f-b2a6-5c127705c763', 'aerospace', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "search" ("id", "keyword", "userId") VALUES ('778b5355-a89a-462a-a264-6d0b6aa299da', 'data science', '4154c7fb-ee3d-4dae-a5e0-ede120f6642f');
INSERT INTO "search" ("id", "keyword", "userId") VALUES ('f7cd3d92-a8cd-4895-a6c5-c88ddffc9a2d', 'data science', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "search" ("id", "keyword", "userId") VALUES ('85df1df3-f23d-44bd-be06-9d4f1248d012', 'biotechnology', 'cf3d77da-74e2-494e-bfdb-2a1fd56b9dab');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
