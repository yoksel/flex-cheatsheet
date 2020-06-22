import { Group } from './group';
import { PropSection } from './prop-section';

export class MainContainer {
  constructor ({ container, groups }) {
    this._container = container;
    this._groups = groups;
    this._sectionsComponents = [];

    this._fillContent();
  }

  getSectionsComponents () {
    return this._sectionsComponents;
  }

  _fillContent () {
    for (const [id, data] of Object.entries(this._groups)) {
      const groupComponent = new Group({ id, ...data });
      const groupElement = groupComponent.element;
      this._sectionsComponents.push(groupComponent);

      for (const item of data.items) {
        const sectionComponent = new PropSection(item);
        this._sectionsComponents.push(sectionComponent);

        groupElement.append(sectionComponent.element);

        this._addChildren(groupComponent, sectionComponent, item.demos);
        this._addChildren(groupComponent, sectionComponent, item.children);
      }

      this._container.append(groupElement);
    }

    // Add semitransparent grids to demos
    document.dispatchEvent(new Event('pageFilled'));
  }

  _addChildren (groupComponent, sectionComponent, children) {
    if (!children || children.length === 0) {
      return;
    }

    for (const child of children) {
      const section = new PropSection(child, { parentId: sectionComponent.id });
      this._sectionsComponents.push(section);

      groupComponent.element.append(section.element);
    }
  }
}
