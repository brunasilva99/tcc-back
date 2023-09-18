-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18/09/2023 às 01:55
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `vidanova_db`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `anotacoes`
--

CREATE TABLE `anotacoes` (
  `id` int(11) NOT NULL,
  `texto` varchar(250) NOT NULL,
  `data_anot` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `anotacoes_user`
--

CREATE TABLE `anotacoes_user` (
  `id_juncao_vicio_anot` int(11) NOT NULL,
  `id_vicio_user` int(11) NOT NULL,
  `id_anotacoes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `motivos`
--

CREATE TABLE `motivos` (
  `id` int(11) NOT NULL,
  `texto` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `motivos`
--

INSERT INTO `motivos` (`id`, `texto`) VALUES
(15, 'Motivo apostas'),
(16, 'Palavrões não são legais.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `motivos_user`
--

CREATE TABLE `motivos_user` (
  `id_juncao_vicio_mot` int(11) NOT NULL,
  `id_vicio_user` int(11) NOT NULL,
  `id_motivos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `motivos_user`
--

INSERT INTO `motivos_user` (`id_juncao_vicio_mot`, `id_vicio_user`, `id_motivos`) VALUES
(14, 21, 15),
(15, 22, 16);

-- --------------------------------------------------------

--
-- Estrutura para tabela `recaidas`
--

CREATE TABLE `recaidas` (
  `id` int(11) NOT NULL,
  `data_rec` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `recaidas`
--

INSERT INTO `recaidas` (`id`, `data_rec`) VALUES
(18, '2023-09-17 23:54:32');

-- --------------------------------------------------------

--
-- Estrutura para tabela `recaidas_user`
--

CREATE TABLE `recaidas_user` (
  `id_juncao_vicio_rec` int(11) NOT NULL,
  `id_vicio_user` int(11) NOT NULL,
  `id_recaidas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `recaidas_user`
--

INSERT INTO `recaidas_user` (`id_juncao_vicio_rec`, `id_vicio_user`, `id_recaidas`) VALUES
(16, 22, 18);

-- --------------------------------------------------------

--
-- Estrutura para tabela `vicios`
--

CREATE TABLE `vicios` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `icone` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `vicios`
--

INSERT INTO `vicios` (`id`, `nome`, `icone`) VALUES
(1, 'Fumar', 'smoking.svg'),
(2, 'Álcool', 'beer.svg'),
(3, 'Drogas', 'needle.svg'),
(4, 'Doces', 'cake.svg'),
(5, 'Junk food', 'junkfood.svg'),
(6, 'Refrigerante', 'soda.svg'),
(7, 'Café', 'coffee.svg'),
(8, 'Pornografia', 'porn.svg'),
(9, 'Apostas', 'poker.svg'),
(10, 'Videojogos', 'videogame.svg'),
(11, 'Compras', 'shopping.svg'),
(12, 'Erva', 'cannabis.svg'),
(13, 'Redes sociais', 'social-midias.svg'),
(14, 'Comprimidos', 'pills.svg'),
(15, 'Procrastinação', 'procrastination.svg'),
(16, 'Palavrões', 'curse-words.svg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `vicios_do_user`
--

CREATE TABLE `vicios_do_user` (
  `id` int(11) NOT NULL,
  `id_vicio` int(11) NOT NULL,
  `data_abs` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `vicios_do_user`
--

INSERT INTO `vicios_do_user` (`id`, `id_vicio`, `data_abs`) VALUES
(21, 9, '2023-09-08 20:53:00'),
(22, 16, '2023-09-05 20:54:00');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `anotacoes`
--
ALTER TABLE `anotacoes`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `anotacoes_user`
--
ALTER TABLE `anotacoes_user`
  ADD PRIMARY KEY (`id_juncao_vicio_anot`),
  ADD KEY `fk_vicio_user_idx` (`id_vicio_user`),
  ADD KEY `fk_anotacoes_idx` (`id_anotacoes`);

--
-- Índices de tabela `motivos`
--
ALTER TABLE `motivos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `motivos_user`
--
ALTER TABLE `motivos_user`
  ADD PRIMARY KEY (`id_juncao_vicio_mot`),
  ADD KEY `fk_vicio_user_idx` (`id_vicio_user`),
  ADD KEY `fk_motivos_idx` (`id_motivos`);

--
-- Índices de tabela `recaidas`
--
ALTER TABLE `recaidas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `recaidas_user`
--
ALTER TABLE `recaidas_user`
  ADD PRIMARY KEY (`id_juncao_vicio_rec`),
  ADD KEY `fk_vicio_user_recaidas_idx` (`id_vicio_user`),
  ADD KEY `fk_recaidas_idx` (`id_recaidas`);

--
-- Índices de tabela `vicios`
--
ALTER TABLE `vicios`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `vicios_do_user`
--
ALTER TABLE `vicios_do_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_vicio_idx` (`id_vicio`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `anotacoes`
--
ALTER TABLE `anotacoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `anotacoes_user`
--
ALTER TABLE `anotacoes_user`
  MODIFY `id_juncao_vicio_anot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `motivos`
--
ALTER TABLE `motivos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `motivos_user`
--
ALTER TABLE `motivos_user`
  MODIFY `id_juncao_vicio_mot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de tabela `recaidas`
--
ALTER TABLE `recaidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `recaidas_user`
--
ALTER TABLE `recaidas_user`
  MODIFY `id_juncao_vicio_rec` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `vicios`
--
ALTER TABLE `vicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de tabela `vicios_do_user`
--
ALTER TABLE `vicios_do_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `anotacoes_user`
--
ALTER TABLE `anotacoes_user`
  ADD CONSTRAINT `fk_anotacoes` FOREIGN KEY (`id_anotacoes`) REFERENCES `anotacoes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_vicio_user_anotacoes` FOREIGN KEY (`id_vicio_user`) REFERENCES `vicios_do_user` (`id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `motivos_user`
--
ALTER TABLE `motivos_user`
  ADD CONSTRAINT `fk_motivos` FOREIGN KEY (`id_motivos`) REFERENCES `motivos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_vicio_user_motivos` FOREIGN KEY (`id_vicio_user`) REFERENCES `vicios_do_user` (`id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `recaidas_user`
--
ALTER TABLE `recaidas_user`
  ADD CONSTRAINT `fk_recaidas` FOREIGN KEY (`id_recaidas`) REFERENCES `recaidas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_vicio_user_recaidas` FOREIGN KEY (`id_vicio_user`) REFERENCES `vicios_do_user` (`id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `vicios_do_user`
--
ALTER TABLE `vicios_do_user`
  ADD CONSTRAINT `fk_vicio` FOREIGN KEY (`id_vicio`) REFERENCES `vicios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
