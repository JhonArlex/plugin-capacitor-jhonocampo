
  Pod::Spec.new do |s|
    s.name = 'PruebaJhonocampo'
    s.version = '0.0.1'
    s.summary = 'Ejemplo de creación de un plugin con capacitor'
    s.license = 'MIT'
    s.homepage = 'https://github.com/JhonArlex/prueba-jhonocampo'
    s.author = 'Jhon Arlex Ocampo Cifuentes'
    s.source = { :git => 'https://github.com/JhonArlex/prueba-jhonocampo', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end