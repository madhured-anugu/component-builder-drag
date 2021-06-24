export function getClassStartsWith(el: HTMLElement, startsWith: string) {
  const classes: any = el.classList;
  const list = Array.from(classes.values());
  const dropParent: any = list.find((cl: string) =>
    cl.startsWith(startsWith)
  );
  const dropCls = dropParent ? dropParent.split('-').pop() : '';
  return dropCls;
}
