# 05 - Preview Patterns

**Version:** 1.0

**Status:** Stable

**Classification:** Engineering Pattern

---

# 1. Purpose

This document defines the engineering standards for implementing, extending, and maintaining file preview functionality within Angular applications.

Preview is an independent business capability that allows users to inspect supported content without downloading it.

Preview shall be treated as a separate workflow from Upload, Download, Delete, and Replace.

---

# 2. Scope

This pattern applies to:

- Image Preview
- PDF Preview
- Office Document Preview
- Video Preview
- Audio Preview
- Text Preview
- Unsupported File Handling
- Thumbnail Preview
- Gallery Preview
- Dialog Preview
- Full Screen Preview

---

# 3. Pattern Dependencies

Depends on:

- Upload Pattern (optional)
- Dialog Pattern
- Accessibility Pattern
- Angular Error Handling
- Angular Testing

May integrate with:

- Table Pattern
- Report Pattern
- Dashboard Pattern

---

# 4. Repository First Principle

Before implementing preview:

Analyze the repository.

Identify:

- Existing preview components
- Existing preview dialog
- Existing PDF viewer
- Existing image viewer
- Existing thumbnail generation
- Existing routing
- Existing permissions
- Existing security checks

Reuse existing implementation.

Never introduce a second preview architecture.

---

# 5. Preview Philosophy

Preview exists to allow users to inspect content quickly.

Preview shall never:

- Modify files
- Download files automatically
- Trigger upload
- Trigger delete

Preview is a read-only interaction unless explicitly defined by business requirements.

---

# 6. Preview Discovery

Before implementation determine:

- Is preview already supported?
- Which viewer is used?
- Which MIME types are supported?
- Are thumbnails generated?
- Is preview performed inline or inside dialogs?

Reuse existing viewers whenever possible.

---

# 7. Supported File Types

Determine support from:

1. Repository implementation.
2. Business requirements.
3. Backend capabilities.

Examples:

- Images
- PDF
- Text
- Video
- Audio

Do not assume all uploaded files are previewable.

---

# 8. Viewer Selection

Select the appropriate viewer based on:

- MIME type
- Extension
- Repository implementation

Examples:

Image

↓

Image Viewer

PDF

↓

PDF Viewer

Video

↓

Video Player

Unsupported

↓

Repository fallback

Viewer selection shall never rely solely on filename extension when MIME type is available.

---

# 9. Preview Lifecycle

Preview shall follow:

User Action

↓

Permission Check

↓

Determine Preview Support

↓

Load Preview

↓

Display Loading Indicator

↓

Render Preview

↓

Handle Errors

↓

Close Preview

The lifecycle shall remain consistent across the application.

---

# 10. Loading State

During preview loading:

Display repository-standard loading indicators.

Preserve layout.

Prevent duplicate preview requests.

Avoid blocking unrelated UI actions.

---

# 11. Error Handling

Handle:

- Unsupported file
- Missing file
- Network failure
- Corrupted file
- Preview generation failure
- Authorization failure

Display meaningful user feedback.

Do not crash the application.

---

# 12. Independent Actions

Preview shall remain completely independent from:

- Download
- Delete
- Replace
- Upload
- Menu actions
- Row selection

Each action shall execute only its intended workflow.

Interactive elements shall never interfere with one another.

---

# 13. PDF Preview Contract

Verify:

✓ Repository PDF viewer reused.

✓ Supported MIME types detected.

✓ Loading state displayed.

✓ Zoom controls follow repository implementation.

✓ Large PDFs remain responsive.

✓ Download remains independent.

✓ Delete remains independent.

✓ Viewer closes cleanly.

---

# 14. Image Preview Contract

Verify:

✓ Repository image viewer reused.

✓ Original aspect ratio preserved.

✓ Loading state implemented.

✓ Broken images handled.

✓ Download remains independent.

✓ Delete remains independent.

✓ Zoom behavior matches repository.

---

# 15. Unsupported File Contract

Verify:

✓ Unsupported files identified.

✓ Appropriate fallback shown.

✓ User informed clearly.

✓ Download remains available if business rules allow.

Preview shall fail gracefully.

---

# 16. Dialog Integration

If preview is shown inside a dialog:

Reuse Dialog Pattern.

Maintain:

- Focus management
- Keyboard navigation
- Close behavior
- Responsive sizing

---

# 17. Performance

Avoid:

- Duplicate preview requests
- Loading entire files unnecessarily
- Re-rendering preview repeatedly
- Memory leaks
- Excessive caching

Reuse existing repository caching where applicable.

---

# 18. Accessibility

Preview shall support:

- Keyboard navigation
- Screen readers
- Focus restoration
- Accessible controls
- Meaningful labels

Accessibility shall never regress.

---

# 19. Security

Never expose:

- Direct storage paths
- Internal URLs
- Temporary credentials
- Private metadata

Respect repository authorization.

Preview only content the user is permitted to access.

---

# 20. Testing

Verify:

- Image preview
- PDF preview
- Unsupported file
- Corrupted file
- Missing file
- Loading state
- Error handling
- Independent actions
- Dialog integration
- Accessibility
- Regression scenarios

---

# 21. Review Checklist

Before completing implementation verify:

✓ Existing preview component reused.

✓ Existing viewer reused.

✓ Existing dialog reused.

✓ Existing permissions respected.

✓ Existing loading state preserved.

✓ Existing styling preserved.

✓ Independent actions verified.

✓ Accessibility preserved.

✓ Performance preserved.

✓ Unit tests updated.

---

# 22. Non-Negotiable Rules

The AI shall never:

- Couple preview with upload.
- Couple preview with download.
- Couple preview with delete.
- Introduce a second preview framework.
- Assume uploaded files are previewable.
- Ignore MIME type validation.
- Break repository permissions.
- Replace existing preview viewers unnecessarily.

---

# 23. Guiding Principle

Preview is a dedicated user experience, not a side effect of file upload.

Every preview implementation shall provide a fast, secure, accessible, and repository-consistent way for users to inspect supported content while preserving the independence of all related file operations.

The AI shall treat preview as reusable engineering infrastructure that integrates naturally with uploads, dialogs, tables, and business workflows without introducing coupling or regressions.