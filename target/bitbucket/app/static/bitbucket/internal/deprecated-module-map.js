'use strict';

define('bitbucket/internal/feature/admin/db/editDbConfig', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/admin/db/editDbConfig"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/admin/db/dbConfigFields');
});
define('bitbucket/internal/feature/comment-count', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/comment-count"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/comment-count/comment-count');
});
define('bitbucket/internal/feature/comments', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/comments"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/comments/comments');
});
define('bitbucket/internal/feature/commit/commit-badge', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/commit/commit-badge"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/commit/commit-badge/commit-badge');
});
define('bitbucket/internal/feature/commit/difftree', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/commit/difftree"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/commit/difftree/difftree');
});
define('bitbucket/internal/feature/commit/tree-and-diff-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/commit/tree-and-diff-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/commit/tree-and-diff-view/tree-and-diff-view');
});
define('bitbucket/internal/feature/compare', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/compare"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/compare/compare');
});
define('bitbucket/internal/feature/discussion/participants-list', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/discussion/participants-list"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/discussion/participants-list/participants-list');
});
define('bitbucket/internal/feature/file-content/binary-diff-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/binary-diff-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/binary-diff-view/binary-diff-view');
});
define('bitbucket/internal/feature/file-content/binary-source-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/binary-source-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/binary-source-view/binary-source-view');
});
define('bitbucket/internal/feature/file-content/binary-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/binary-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/binary-view/binary-view');
});
define('bitbucket/internal/feature/file-content/commit-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/commit-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/commit-selector/commit-selector');
});
define('bitbucket/internal/feature/file-content/content-message', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/content-message"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/content-message/content-message');
});
define('bitbucket/internal/feature/file-content/default-handlers-toggle', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/default-handlers-toggle"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/default-handlers-toggle/default-handlers-toggle');
});
define('bitbucket/internal/feature/file-content/diff-hunk-map', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/diff-hunk-map"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/diff-hunk-map/diff-hunk-map');
});
define('bitbucket/internal/feature/file-content/diff-view-context', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/diff-view-context"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/diff-view-context/diff-view-context');
});
define('bitbucket/internal/feature/file-content/diff-view-options-panel', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/diff-view-options-panel"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/diff-view-options-panel/diff-view-options-panel');
});
define('bitbucket/internal/feature/file-content/diff-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/diff-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/diff-view/diff-view');
});
define('bitbucket/internal/feature/file-content/file-blame', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/file-blame"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/file-blame/file-blame');
});
define('bitbucket/internal/feature/file-content', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/file-content');
});
define('bitbucket/internal/feature/file-content/source-handler', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/source-handler"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/handlers/source-handler');
});
define('bitbucket/internal/feature/file-content/side-by-side-diff-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/side-by-side-diff-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/side-by-side-diff-view/side-by-side-diff-view');
});
define('bitbucket/internal/feature/file-content/source-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/source-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/source-view/source-view');
});
define('bitbucket/internal/feature/file-content/stash-codemirror', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/stash-codemirror"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/stash-codemirror/stash-codemirror');
});
define('bitbucket/internal/feature/file-content/text-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/text-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/text-view/text-view');
});
define('bitbucket/internal/feature/file-content/unified-diff-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/file-content/unified-diff-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/file-content/unified-diff-view/unified-diff-view');
});
define('bitbucket/internal/feature/filebrowser/file-finder', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/filebrowser/file-finder"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/filebrowser/file-finder/file-finder');
});
define('bitbucket/internal/feature/filebrowser/file-table-history', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/filebrowser/file-table-history"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/filebrowser/file-table-history/file-table-history');
});
define('bitbucket/internal/feature/filebrowser/file-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/filebrowser/file-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/filebrowser/file-table/file-table');
});
define('bitbucket/internal/feature/inbox-dialog', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/inbox-dialog"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/inbox/inbox-dialog');
});
define('bitbucket/internal/feature/inbox', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/inbox"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/inbox/inbox');
});
define('bitbucket/internal/feature/moustash', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/moustash"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/moustash/moustash');
});
define('bitbucket/internal/feature/permission/multi-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/permission/multi-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/permission/multi-selector/multi-selector');
});
define('bitbucket/internal/feature/permission/permission-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/permission/permission-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/permission/permission-table/permission-table');
});
define('bitbucket/internal/feature/project/project-avatar-picker', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/project/project-avatar-picker"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/project/project-avatar-picker/project-avatar-picker');
});
define('bitbucket/internal/feature/project/project-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/project/project-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/project/project-selector/project-selector');
});
define('bitbucket/internal/feature/project/project-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/project/project-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/project/project-table/project-table');
});
define('bitbucket/internal/feature/pull-request/pull-request-activity', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/pull-request-activity"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/activity/pull-request-activity');
});
define('bitbucket/internal/feature/pull-request/can-merge', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/can-merge"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/can-merge/can-merge');
});
define('bitbucket/internal/feature/pull-request/pull-request-commits', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/pull-request-commits"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/commits/pull-request-commits');
});
define('bitbucket/internal/feature/pull-request/pull-request-create', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/pull-request-create"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/create-form/pull-request-create');
});
define('bitbucket/internal/feature/pull-request/pull-request-diff', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/pull-request-diff"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/diff/pull-request-diff');
});
define('bitbucket/internal/feature/pull-request-edit', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request-edit"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/edit/pull-request-edit');
});
define('bitbucket/internal/feature/pull-request-list-dialog', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request-list-dialog"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/list-dialog/pull-request-list-dialog');
});
define('bitbucket/internal/feature/pull-request/list/analytics', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/list/analytics"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/list/pull-request-list-analytics');
});
define('bitbucket/internal/feature/pull-request/metadata-generator', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/metadata-generator"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/metadata-generator/metadata-generator');
});
define('bitbucket/internal/feature/pull-request/analytics', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/analytics"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/pull-request-analytics/pull-request-analytics');
});
define('bitbucket/internal/feature/pull-request/pull-request-history', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/pull-request-history"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/pull-request-history/pull-request-history');
});
define('bitbucket/internal/feature/pull-request/pull-request-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/pull-request/pull-request-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/pull-request/table/pull-request-table');
});
define('bitbucket/internal/feature/repository/base-repository-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/base-repository-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/base-repository-selector/base-repository-selector');
});
define('bitbucket/internal/feature/repository/branch-diagram', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/branch-diagram"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/branch-diagram/branch-diagram');
});
define('bitbucket/internal/feature/repository/branch-selector-field-internals', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/branch-selector-field-internals"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/branch-selector-field-internals/branch-selector-field-internals');
});
define('bitbucket/internal/feature/repository/branch-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/branch-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/branch-selector/branch-selector');
});
define('bitbucket/internal/feature/repository/branch-table-pull-requests', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/branch-table-pull-requests"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/branch-table-pull-requests/branch-table-pull-requests');
});
define('bitbucket/internal/feature/repository/branch-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/branch-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/branch-table/branch-table');
});
define('bitbucket/internal/feature/repository/cloneUrlGen', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/cloneUrlGen"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/cloneUrlGen/cloneUrlGen');
});
define('bitbucket/internal/feature/repository/global-repository-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/global-repository-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/global-repository-selector/global-repository-selector');
});
define('bitbucket/internal/feature/repository/ref-lozenge', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/ref-lozenge"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/ref-lozenge/ref-lozenge');
});
define('bitbucket/internal/feature/repository/related-repository-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/related-repository-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/related-repository-selector/related-repository-selector');
});
define('bitbucket/internal/feature/repository/repository-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/repository-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/repository-table/repository-table');
});
define('bitbucket/internal/feature/repository/revision-reference-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/revision-reference-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/revision-reference-selector/revision-reference-selector');
});
define('bitbucket/internal/feature/repository/source-target-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/repository/source-target-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/repository/source-target-selector/source-target-selector');
});
define('bitbucket/internal/feature/tasks/pull-request-list', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/tasks/pull-request-list"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/tasks/pull-request-list/pull-request-list');
});
define('bitbucket/internal/feature/tasks/task-analytics', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/tasks/task-analytics"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/tasks/task-analytics/task-analytics');
});
define('bitbucket/internal/feature/tasks/task-list', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/tasks/task-list"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/tasks/task-list/task-list');
});
define('bitbucket/internal/feature/tasks/task-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/tasks/task-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/tasks/task-view/task-view');
});
define('bitbucket/internal/feature/tasks/taskable-comment', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/tasks/taskable-comment"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/tasks/taskable-comment/taskable-comment');
});
define('bitbucket/internal/feature/tasks/tasks-overview', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/tasks/tasks-overview"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/tasks/tasks-overview/tasks-overview');
});
define('bitbucket/internal/feature/timezone/onboarding', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/timezone/onboarding"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/timezone/onboarding/timezone-onboarding');
});
define('bitbucket/internal/feature/timezone', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/timezone"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/timezone/timezone');
});
define('bitbucket/internal/feature/user/group-multi-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/user/group-multi-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/user/group-multi-selector/group-multi-selector');
});
define('bitbucket/internal/feature/user/group-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/user/group-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/user/group-table/group-table');
});
define('bitbucket/internal/feature/user/group-users-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/user/group-users-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/user/group-users-table/group-users-table');
});
define('bitbucket/internal/feature/user/user-and-group-multi-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/user/user-and-group-multi-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/user/user-and-group-multi-selector/user-and-group-multi-selector');
});
define('bitbucket/internal/feature/user/user-groups-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/user/user-groups-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/user/user-groups-table/user-groups-table');
});
define('bitbucket/internal/feature/user/user-multi-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/user/user-multi-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/user/user-multi-selector/user-multi-selector');
});
define('bitbucket/internal/feature/user/user-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/user/user-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/user/user-table/user-table');
});
define('bitbucket/internal/feature/watch', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/feature/watch"', null, '5.0', '6.0')();
    return require('bitbucket/internal/feature/watch/watch');
});
define('bitbucket/internal/layout/admin', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/layout/admin"', null, '5.0', '6.0')();
    return require('bitbucket/internal/layout/admin/admin');
});
define('bitbucket/internal/layout/base', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/layout/base"', null, '5.0', '6.0')();
    return require('bitbucket/internal/layout/base/base');
});
define('bitbucket/internal/layout/base/menu/recent-repos', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/layout/base/menu/recent-repos"', null, '5.0', '6.0')();
    return require('bitbucket/internal/layout/base/menu/repositories/recent');
});
define('bitbucket/internal/layout/branch', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/layout/branch"', null, '5.0', '6.0')();
    return require('bitbucket/internal/layout/branch/branch');
});
define('bitbucket/internal/layout/files', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/layout/files"', null, '5.0', '6.0')();
    return require('bitbucket/internal/layout/files/files');
});
define('bitbucket/internal/layout/maintenance', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/layout/maintenance"', null, '5.0', '6.0')();
    return require('bitbucket/internal/layout/maintenance/maintenance');
});
define('bitbucket/internal/layout/project', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/layout/project"', null, '5.0', '6.0')();
    return require('bitbucket/internal/layout/project/project');
});
define('bitbucket/internal/layout/pull-request', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/layout/pull-request"', null, '5.0', '6.0')();
    return require('bitbucket/internal/layout/pull-request/pull-request');
});
define('bitbucket/internal/layout/repository', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/layout/repository"', null, '5.0', '6.0')();
    return require('bitbucket/internal/layout/repository/repository');
});
define('bitbucket/internal/page/admin/clustering', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/admin/clustering"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/admin/clustering/clustering');
});
define('bitbucket/internal/page/admin/db/migrate', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/admin/db/migrate"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/admin/db/migrateDbConfig');
});
define('bitbucket/internal/page/admin/globalPermissions', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/admin/globalPermissions"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/admin/globalPermissions/globalPermissions');
});
define('bitbucket/internal/page/admin/groupEdit', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/admin/groupEdit"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/admin/groups/groupedit');
});
define('bitbucket/internal/page/admin/groupsList', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/admin/groupsList"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/admin/groups/grouplist');
});
define('bitbucket/internal/page/admin/mailServer', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/admin/mailServer"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/admin/mailserver/mailserver');
});
define('bitbucket/internal/page/admin/userCreate', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/admin/userCreate"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/admin/users/createUser');
});
define('bitbucket/internal/page/admin/userEdit', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/admin/userEdit"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/admin/users/useredit');
});
define('bitbucket/internal/page/admin/usersList', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/admin/usersList"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/admin/users/userlist');
});
define('bitbucket/internal/page/branches', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/branches"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/branches/branches');
});
define('bitbucket/internal/page/commits', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/commits"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/commits/commits');
});
define('bitbucket/internal/page/compare', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/compare"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/compare/compare');
});
define('bitbucket/internal/page/filebrowser', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/filebrowser"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/filebrowser/filebrowser');
});
define('bitbucket/internal/page/global-repository-list', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/global-repository-list"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/global-repository-list/global-repository-list');
});
define('bitbucket/internal/page/login', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/login"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/login/login');
});
define('bitbucket/internal/page/maintenance/backup', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/maintenance/backup"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/maintenance/backup/backup');
});
define('bitbucket/internal/page/maintenance/lock', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/maintenance/lock"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/maintenance/lock/lock');
});
define('bitbucket/internal/page/maintenance/migration', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/maintenance/migration"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/maintenance/migration/migration');
});
define('bitbucket/internal/page/getting-started', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/getting-started"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/onboarding/getting-started');
});
define('bitbucket/internal/page/upgrade-onboarding', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/upgrade-onboarding"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/onboarding/upgrade-onboarding');
});
define('bitbucket/internal/page/project-create', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/project-create"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/project-create/project-create');
});
define('bitbucket/internal/page/project-list', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/project-list"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/project-list/project-list');
});
define('bitbucket/internal/page/project/overview', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/project/overview"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/project/overview/project-overview');
});
define('bitbucket/internal/page/project/permissions', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/project/permissions"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/project/permissions/project-permissions');
});
define('bitbucket/internal/page/project/settings', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/project/settings"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/project/settings/project-settings');
});
define('bitbucket/internal/page/pull-request-create', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/pull-request-create"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/pull-request/create/pull-request-create');
});
define('bitbucket/internal/page/pull-request-list/view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/pull-request-list/view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/pull-request/list/pull-request-list-view');
});
define('bitbucket/internal/page/pull-requests-list', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/pull-requests-list"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/pull-request/list/pull-request-list');
});
define('bitbucket/internal/page/pull-request/pull-request-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/pull-request/pull-request-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/pull-request/view/pull-request-view');
});
define('bitbucket/internal/page/repository-create', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/repository-create"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/repository-create/repository-create');
});
define('bitbucket/internal/page/repository-fork', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/repository-fork"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/repository-fork/repository-fork');
});
define('bitbucket/internal/page/repository/emptyRepository', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/repository/emptyRepository"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/repository/empty/empty-repository');
});
define('bitbucket/internal/page/repository/noDefaultBranch', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/repository/noDefaultBranch"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/repository/no-default-branch/no-default-branch');
});
define('bitbucket/internal/page/repository/permissions', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/repository/permissions"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/repository/permissions/repository-permissions');
});
define('bitbucket/internal/page/repositoryGeneralSettings', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/repositoryGeneralSettings"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/repository/settings/general/repository-settings');
});
define('bitbucket/internal/page/setup/database', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/setup/database"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/setup/setupDatabase');
});
define('bitbucket/internal/page/setup/jiraIntegration', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/setup/jiraIntegration"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/setup/setupJiraIntegration');
});
define('bitbucket/internal/page/setup/mirror', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/setup/mirror"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/setup/setupMirror');
});
define('bitbucket/internal/page/setupSettings', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/setupSettings"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/setup/setupSettings');
});
define('bitbucket/internal/page/source', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/source"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/source/source');
});
define('bitbucket/internal/page/users/account', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/users/account"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/users/account/account');
});
define('bitbucket/internal/page/users/profile', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/page/users/profile"', null, '5.0', '6.0')();
    return require('bitbucket/internal/page/users/profile/profile');
});
define('bitbucket/internal/util/notifications', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/util/notifications"', null, '5.0', '6.0')();
    return require('bitbucket/internal/util/notifications/notifications');
});
define('bitbucket/internal/widget/settings-page-analytics', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/settings-page-analytics"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/analytics/settings-page-analytics');
});
define('bitbucket/internal/widget/aui/dropdown', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/aui/dropdown"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/aui/dropdown/dropdown');
});
define('bitbucket/internal/widget/aui/form', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/aui/form"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/aui/form/form');
});
define('bitbucket/internal/widget/autocomplete-dialog', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/autocomplete-dialog"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/autocomplete-dialog/autocomplete-dialog');
});
define('bitbucket/internal/widget/avatar-list', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/avatar-list"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/avatar-list/avatar-list');
});
define('bitbucket/internal/widget/avatar-picker-dialog', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/avatar-picker-dialog"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/avatar-picker-dialog/avatar-picker-dialog');
});
define('bitbucket/internal/widget/breadcrumbs', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/breadcrumbs"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/breadcrumbs/breadcrumbs');
});
define('bitbucket/internal/widget/button-trigger', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/button-trigger"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/button-trigger/button-trigger');
});
define('bitbucket/internal/widget/canvas-cropper', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/canvas-cropper"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/canvas-cropper/canvas-cropper');
});
define('bitbucket/internal/widget/captcha', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/captcha"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/captcha/captcha');
});
define('bitbucket/internal/widget/delete-dialog', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/delete-dialog"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/delete-dialog/delete-dialog');
});
define('bitbucket/internal/widget/drag-drop-file-target', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/drag-drop-file-target"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/drag-drop-file-target/drag-drop-file-target');
});
define('bitbucket/internal/widget/drag-drop-file-uploader', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/drag-drop-file-uploader"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/drag-drop-file-uploader/drag-drop-file-uploader');
});
define('bitbucket/internal/widget/error-dialog', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/error-dialog"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/error-dialog/error-dialog');
});
define('bitbucket/internal/widget/exception', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/exception"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/exception/exception');
});
define('bitbucket/internal/widget/faux-upload-field', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/faux-upload-field"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/faux-upload-field/faux-upload-field');
});
define('bitbucket/internal/widget/image-explorer', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/image-explorer"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/image-explorer/image-explorer');
});
define('bitbucket/internal/widget/image-upload-and-crop', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/image-upload-and-crop"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/image-upload-and-crop/image-upload-and-crop');
});
define('bitbucket/internal/widget/inline-error-dialog', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/inline-error-dialog"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/inline-error-dialog/inline-error-dialog');
});
define('bitbucket/internal/widget/keyboard-shortcuts', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/keyboard-shortcuts"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/keyboard-shortcuts/keyboard-shortcuts');
});
define('bitbucket/internal/widget/list-and-detail-view', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/list-and-detail-view"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/list-and-detail-view/list-and-detail-view');
});
define('bitbucket/internal/widget/markup-attachments', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/markup-attachments"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/markup-attachments/markup-attachments');
});
define('bitbucket/internal/widget/markup-editor', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/markup-editor"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/markup-editor/markup-editor');
});
define('bitbucket/internal/widget/markup-preview', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/markup-preview"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/markup-preview/markup-preview');
});
define('bitbucket/internal/widget/mentionable-textarea', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/mentionable-textarea"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/mentionable-textarea/mentionable-textarea');
});
define('bitbucket/internal/widget/paged-table', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/paged-table"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/paged-table/paged-table');
});
define('bitbucket/internal/widget/paste-image-target', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/paste-image-target"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/paste-image-target/paste-image-target');
});
define('bitbucket/internal/widget/progress-bar', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/progress-bar"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/progress-bar/progress-bar');
});
define('bitbucket/internal/widget/searchable-multi-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/searchable-multi-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/searchable-multi-selector/searchable-multi-selector');
});
define('bitbucket/internal/widget/searchable-selector', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/searchable-selector"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/searchable-selector/searchable-selector');
});
define('bitbucket/internal/widget/sidebar', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/sidebar"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/sidebar/sidebar');
});
define('bitbucket/internal/widget/simple-select', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/simple-select"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/simple-select/simple-select');
});
define('bitbucket/internal/widget/submit-spinner', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/submit-spinner"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/submit-spinner/submit-spinner');
});
define('bitbucket/internal/widget/updating-section', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/updating-section"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/updating-section/updating-section');
});
define('bitbucket/internal/widget/upload-interceptor', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/upload-interceptor"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/upload-interceptor/upload-interceptor');
});
define('bitbucket/internal/widget/user-avatar-form', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/user-avatar-form"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/user-avatar-form/user-avatar-form');
});
define('bitbucket/internal/widget/webcam-capture', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/webcam-capture"', null, '5.0', '6.0')();
    return require('bitbucket/internal/widget/webcam-capture/webcam-capture');
});

define('bitbucket/internal/widget/confirm-dialog', ['bitbucket/internal/util/deprecation'], function (deprecate) {
    deprecate.getMessageLogger('Module rename: "bitbucket/internal/widget/confirm-dialog"', null, '5.7', '6.0')();
    return require('bitbucket/internal/widget/confirm-dialog/confirm-dialog');
});

// NPM package name is "baconjs" but we need to support old name
define('bacon', ['baconjs', 'bitbucket/internal/util/deprecation'], function (baconjs, deprecate) {
    deprecate.getMessageLogger('Module rename: "bacon"', 'baconjs', '5.11', '6.0')();

    return baconjs;
});

// The NPM package name is "resemblejs" but we need to support old name
define('resemble', ['resemblejs', 'bitbucket/internal/util/deprecation'], function (resemblejs, deprecate) {
    deprecate.getMessageLogger('Module rename: "resemble"', 'resemblejs', '5.11', '6.0')();

    return resemblejs;
});

// The AUI NPM package name is "@atlassian/aui" but we need to support old "aui" name
define('aui', ['@atlassian/aui', 'bitbucket/internal/util/deprecation'], function (AJS, deprecate) {
    deprecate.getMessageLogger('Module rename: "aui"', '@atlassian/aui', '5.13', '7.0')();

    return AJS;
});