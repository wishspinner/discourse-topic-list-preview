const listChoices = ['latest', 'new', 'unread', 'top', 'latest-mobile', 'new-mobile', 'unread-mobile', 'top-mobile'];
const listSettings = ['social','thumbnail','excerpt','action','category_badge_move'];

export default {
  setupComponent(args, component) {
    listSettings.forEach((s) => {
      if (typeof args.category.custom_fields[`topic_list_${s}`] !== 'string') {
        args.category.custom_fields[`topic_list_${s}`] = '';
      }
    });
    component.set('choices', listChoices);
  }
};
