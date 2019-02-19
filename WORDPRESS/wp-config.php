<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'Valerie');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2hW;P ~+Cy*j=PjsU^bo &~)Km{tA*3tg=I:Lya=c~Cpz^q)HUYw4K~?ORc6E@Lc');
define('SECURE_AUTH_KEY',  'VbbsIN=8Zu9|U-.~s&*M,-&^>x$N.^!&Tgu)#_ELaAt{&.=a;pOt$g)ebas4D ;A');
define('LOGGED_IN_KEY',    '_FDI}qPvEm<+Z?JJ6O2AHMn U&-~rP=)A9Simk}Z!+ub|PmHR$W=hRUHN/V]|d4v');
define('NONCE_KEY',        ')C[5G8BLy$Fp%L@Om9r`Ld@AUl)CNDFucy,q7t,fW[.1),>bo;%cXAYSkuv@Tp I');
define('AUTH_SALT',        '&Nb3WffY>DrKz71-YC5zj(dCUYbG`ct9)}&w(do?~iuL,}xB 2|Z}pZXA9.)&a,`');
define('SECURE_AUTH_SALT', 'ShvG*8EFB`.8Z5sU{pvUnT+ QTO?N.1jMNC$e{k|.fisDX)Q&3/CzJo?z=8yQ3=!');
define('LOGGED_IN_SALT',   'E?~4*RXYCtehb-ch3xQC`x5&Nx4SybN8`=.w)tEa|{A]*zg5WDLSbcf(uwL.KbvJ');
define('NONCE_SALT',       'N;VZWY5oRvg}U (_%&)a/+ur<F4vC,2Z2uS!!E4biW//~eHGC~Z&C_Yz5m.|okfT');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'bdd_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
