-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Gegenereerd op: 04 jan 2025 om 18:17
-- Serverversie: 10.4.32-MariaDB
-- PHP-versie: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backendwebcn`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `articles`
--

CREATE TABLE `articles` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `pubDate` date NOT NULL,
  `category` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `creator` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `articles`
--

INSERT INTO `articles` (`id`, `title`, `description`, `image_url`, `pubDate`, `category`, `link`, `creator`) VALUES
('13cca3efa7a26c9614205949a47a84dd', 'Bị cắt sóng 2G, đây là 3 điện thoại Nokia giá siêu rẻ thay thế \"cục gạch\" cũ', 'Người dùng có thể lựa chọn các sản phẩm 4G giá rẻ của Nokia để thay thế cho các mẫu điện thoại \'cục gạch\' bị cắt sóng 2G.', 'https://sohanews.sohacdn.com/zoom/600_315/160588918557773824/2024/12/19/img5741-1734599936864-17345999369491779986857-0-0-388-621-crop-1734599989675147029623.jpg', '2025-01-01', 'technology', 'https://soha.vn/bi-cat-song-2g-day-la-3-dien-thoai-nokia-gia-sieu-re-thay-the-cuc-gach-cu-198241219162019849.htm', NULL),
('2417c8091219f6a5ca75b59a5d79adee', 'Lý Hoàng Nam giành ngôi á quân giải đấu tầm cỡ, làm nên lịch sử cho tennis Việt Nam', 'Lý Hoàng Nam vẫn luôn giữ vững vị thế là tay vợt số 1 tennis Việt Nam với những chiến tích ấn tượng ở các giải đấu quốc tế.', 'https://cdn-img.thethao247.vn/resize_360x230/storage/files/btvttth2/2025/01/01/nh-tt247-6774a62112d05.jpg', '2025-01-01', 'sports', 'https://thethao247.vn/463-ly-hoang-nam-gianh-ngoi-a-quan-giai-dau-tam-co-lam-nen-lich-su-cho-tennis-viet-nam-d353019.html', 'Thethao247'),
('417abd8023ec0c4b7c46ed78e08ed5bc', 'Từ Rashford đến Cunha: 10 cầu thủ có thể ra đi tháng 1', 'Hôm nay (1/1/2025) thị trường chuyển nhượng Đông chính thức mở cửa, ngoài Rashford của Man Utd, còn khá nhiều ngôi sao đáng chú ý trước khả năng chuyển màu áo.', 'https://cdn-img.thethao247.vn/resize_360x230/storage/files/hungtm/2024/12/31/tcn-6773c169d86f6.jpg', '2025-01-01', 'sports', 'https://thethao247.vn/72-tu-rashford-den-cunha-10-cau-thu-co-the-ra-di-thang-1-d352983.html', 'Thethao247'),
('4fc28e479e3ae44ca605ba62fba1ab79', 'AI \'siêu thông minh\' của Trung Quốc tự nhận là ChatGPT', 'DeepSeek V3, mô hình AI nguồn mở được DeepSeek (Trung Quốc) giới thiệu có khả năng xử lý hàng đầu, nhưng lại tự nhận là ChatGPT.', 'https://vcdn1-sohoa.vnecdn.net/2025/01/01/deepseek-ai-model-says-it-is-c-4988-4562-1735708132.png?dpr=1&fit=crop&h=0&q=100&s=I0Tnjdl2GacArfcEJFCvoA&w=1200', '2025-01-01', 'technology', 'https://vnexpress.net/ai-sieu-thong-minh-cua-trung-quoc-tu-nhan-la-chatgpt-4834373.html', NULL),
('53c98de96e5da9b22f91858f06451692', 'Top 5 game Indie hay nhất 2024', 'Dưới đây là 5 tựa game Indie hay nhất năm 2024 mà chắc chắn bạn không nên bỏ qua.', 'https://cdn-img.thethao247.vn/resize_360x230/storage/files/haibui/2024/12/31/chrome_79opmraq9a-1-67739f707bd9d.png', '2025-01-01', 'sports', 'https://thethao247.vn/400-top-5-game-indie-hay-nhat-2024-d352961.html', 'Thethao247'),
('5c157e36f01775145b06616027bb9e9e', 'MU xuống hạng và 4 \'thảm họa\' chắc chắn sẽ xảy ra', 'Phong độ tệ hại của Manchester United tiếp tục kéo dài trong trận đấu với Newcastle United vào rạng sáng 31/12, khiến HLV Ruben Amorim phải thừa nhận rằng \"Quỷ đỏ\" có thể đang đối mặt với cuộc chiến trụ hạng.', 'https://cdn-img.thethao247.vn/resize_360x230/storage/files/camhm/2024/12/31/resize-_52__1-2-6773e85d30d12.jpg', '2025-01-01', 'sports', 'https://thethao247.vn/426-mu-xuong-hang-va-4-tham-hoa-chac-chan-se-xay-ra-d352994.html', 'Thethao247'),
('767a12954c272802b0d0b65ee7a6b882', 'Ký ức Đà Lạt', 'Sách \"Đà Lạt, thành phố trong album\" tái hiện ký ức một thời về vùng đất, con người Đà Lạt, với loạt ảnh tư liệu hiếm.', 'https://vcdn1-giaitri.vnecdn.net/2024/12/31/da-lat-xua-1-1735638196-173563-7219-6416-1735638483.jpg?dpr=1&fit=crop&h=0&q=100&s=9tIsUcBEiDUZrb25DCeMbQ&w=1200', '2025-01-01', 'entertainment', 'https://vnexpress.net/ky-uc-da-lat-4834189.html', NULL),
('e8dbd9eac92a49fd33189a11709067d0', 'HLV Kim Sang Sik: ĐT Việt Nam giờ không còn sợ Thái Lan', 'HLV Kim Sang Sik của ĐT Việt Nam có những phát biểu đáng chú ý trước trận chung kết lượt đi AFF Cup 2024 với Thái Lan.', 'https://cdn-img.thethao247.vn/resize_360x230/storage/files/nvhainam/2025/01/01/470877442_911698694497378_6936210693888995982_n-6774c62441796.jpg', '2025-01-01', 'sports', 'https://thethao247.vn/aff-cup/405-hlv-kim-sang-sik-noi-cung-truoc-chung-ket-aff-cup-voi-thai-lan-d353028.html', 'Thethao247');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `user_id` int(255) NOT NULL,
  `article_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `favorites`
--

INSERT INTO `favorites` (`id`, `user_id`, `article_id`) VALUES
(11, 1, '53c98de96e5da9b22f91858f06451692'),
(12, 1, '2417c8091219f6a5ca75b59a5d79adee'),
(13, 1, '4fc28e479e3ae44ca605ba62fba1ab79'),
(14, 1, '13cca3efa7a26c9614205949a47a84dd'),
(16, 1, '767a12954c272802b0d0b65ee7a6b882');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Tuan', 'tuan.admin@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(2, 'phi', 'phi.worker@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(3, 'hoten', 'hoten@gamil.com', '96e79218965eb72c92a549dd5a330112'),
(5, 'loc', 'loc.user@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(6, 'dang', 'dang.user@gmail.com', 'e10adc3949ba59abbe56e057f20f883e');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_favorites_user` (`user_id`),
  ADD KEY `fk_favorites_article` (`article_id`);

--
-- Indexen voor tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT voor een tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `fk_favorites_article` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_favorites_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
