@ECHO OFF

SET MAGE_PHP_SCRIPT=mage.php
SET DOWNLOADER_PATH=downloader
SET MAGE_PHP_BIN="php"

IF x%~n0 == xmage-setup (
	ECHO Running initial setup...

	REM set the magento root directory
	SET MAGE_ROOT_DIR=%CD%

	%0 config-set magento_root %MAGE_ROOT_DIR%
    %0 config-set preferred_state beta
    %0 channel-add http://connect20.magentocommerce.com/community
    EXIT
)

IF x%MAGE_ROOT_DIR% == x (
	SET MAGE_ROOT_DIR=%CD%/%DOWNLOADER_PATH%
)

%MAGE_PHP_BIN% -C -d output_buffering=1 -d safe_mode=0 -d open_basedir="" -d auto_prepend_file="" -d auto_append_file="" -d variables_order=EGPCS -d register_argc_argv="On"  -f "%MAGE_ROOT_DIR%\%MAGE_PHP_SCRIPT%" -- %1 %2 %3 %4 %5 %6 %7 %8 %9
