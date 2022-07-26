```py
ini_config_types: Final[Dict[str, _INI_PARSER_CALLABLE]] = {
    'python_version': parse_version,
    'strict_optional_whitelist': lambda s: s.split(),
    'custom_typing_module': str,
    'custom_typeshed_dir': expand_path,
    'mypy_path': lambda s: [expand_path(p.strip()) for p in re.split('[,:]', s)],
    'files': split_and_match_files,
    'quickstart_file': expand_path,
    'junit_xml': expand_path,
    # These two are for backwards compatibility
    'silent_imports': bool,
    'almost_silent': bool,
    'follow_imports': check_follow_imports,
    'no_site_packages': bool,
    'plugins': lambda s: [p.strip() for p in s.split(',')],
    'always_true': lambda s: [p.strip() for p in s.split(',')],
    'always_false': lambda s: [p.strip() for p in s.split(',')],
    'disable_error_code': lambda s: [p.strip() for p in s.split(',')],
    'enable_error_code': lambda s: [p.strip() for p in s.split(',')],
    'package_root': lambda s: [p.strip() for p in s.split(',')],
    'cache_dir': expand_path,
    'python_executable': expand_path,
    'strict': bool,
    'exclude': lambda s: [s.strip()],
}
```