-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le : Mar 16 Juin 2015 à 16:32
-- Version du serveur: 5.1.52
-- Version de PHP: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `demandes-base`
--

-- --------------------------------------------------------

--
-- Structure de la table `demande`
--

CREATE TABLE IF NOT EXISTS `demande` (
  `motif` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `demande`
--

INSERT INTO `demande` (`motif`) VALUES
('CA'),
('CA'),
('CA'),
('CA'),
('CA'),
('CA'),
('CA');

-- --------------------------------------------------------

--
-- Structure de la table `demandetable`
--

CREATE TABLE IF NOT EXISTS `demandetable` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `motif` varchar(30) NOT NULL,
  `datedebut` date NOT NULL,
  `datefin` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- Contenu de la table `demandetable`
--

INSERT INTO `demandetable` (`id`, `motif`, `datedebut`, `datefin`) VALUES
(1, 'CA', '2015-06-01', '2015-06-02'),
(20, 'CA', '2015-10-09', '2015-11-15'),
(19, 'RCYC', '2016-01-23', '2016-02-01'),
(18, 'CA', '2015-08-08', '2015-09-30'),
(17, 'RCYC', '2015-07-09', '2015-07-15'),
(16, 'RCYC', '2015-07-09', '2015-07-15'),
(21, 'CA', '2015-07-05', '2015-07-10'),
(22, 'Bonsoir', '2015-06-16', '2015-06-17');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
