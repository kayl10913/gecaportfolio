import { useEffect, useRef, useState } from 'react';

function splitClasses(className = '') {
  const parts = className.split(/\s+/).filter(Boolean);
  const objectClassName = parts.filter((c) => c.startsWith('object-')).join(' ') || 'object-cover';
  const layoutClassName = parts.filter((c) => !c.startsWith('object-')).join(' ');
  return { layoutClassName, objectClassName };
}

export default function LazyImage({
  src,
  alt,
  className = '',
  root = null,
  rootMargin = '120px',
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { layoutClassName, objectClassName } = splitClasses(className);

  useEffect(() => {
    setVisible(false);
    setLoaded(false);
  }, [src]);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [root, rootMargin, src, visible]);

  return (
    <div
      ref={ref}
      className={`relative isolate overflow-hidden bg-slate-200/80 dark:bg-slate-800 ${layoutClassName}`}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-700" aria-hidden />
      )}
      {visible && (
        <img
          src={src}
          alt={alt}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${objectClassName} ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      )}
    </div>
  );
}
